"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./config";
import { db } from "../db";
import { guest } from "../db/schema/index";
import { signUpSchema, signInSchema, guestSessionSchema } from "./validation";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

export async function signUp(formData: FormData) {
  try {
    const rawData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validatedData = signUpSchema.parse(rawData);

    const result = await auth.api.signUpEmail({
      body: {
        name: validatedData.fullName,
        email: validatedData.email,
        password: validatedData.password,
      },
    });

    await mergeGuestCartWithUserCart(result.user.id);

    return { success: true, user: result.user };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function signIn(formData: FormData) {
  try {
    const rawData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validatedData = signInSchema.parse(rawData);

    const result = await auth.api.signInEmail({
      body: {
        email: validatedData.email,
        password: validatedData.password,
      },
    });

    await mergeGuestCartWithUserCart(result.user.id);

    return { success: true, user: result.user };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function signOut() {
  try {
    await auth.api.signOut({
      headers: new Headers()
    });
    redirect("/");
  } catch (error) {
    return { error: "Failed to sign out" };
  }
}

export async function createGuestSession() {
  try {
    const sessionToken = uuidv4();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await db.insert(guest).values({
      sessionToken,
      expiresAt,
    });

    const cookieStore = await cookies();
    cookieStore.set("guest_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return { success: true, sessionToken };
  } catch (error) {
    return { error: "Failed to create guest session" };
  }
}

export async function getGuestSession() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("guest_session")?.value;

    if (!sessionToken) {
      return null;
    }

    const validatedData = guestSessionSchema.parse({ sessionToken });

    const guestSession = await db
      .select()
      .from(guest)
      .where(eq(guest.sessionToken, validatedData.sessionToken))
      .limit(1);

    if (guestSession.length === 0) {
      return null;
    }

    const session = guestSession[0];

    if (session.expiresAt < new Date()) {
      await db.delete(guest).where(eq(guest.sessionToken, validatedData.sessionToken));
      const cookieStoreForDelete = await cookies();
      cookieStoreForDelete.delete("guest_session");
      return null;
    }

    return session;
  } catch (error) {
    return null;
  }
}

export async function mergeGuestCartWithUserCart(userId: string) {
  try {
    const guestSession = await getGuestSession();
    
    if (!guestSession) {
      return { success: true, message: "No guest session to merge" };
    }


    await db.delete(guest).where(eq(guest.sessionToken, guestSession.sessionToken));
    
    const cookieStore = await cookies();
    cookieStore.delete("guest_session");

    return { success: true, message: "Guest cart merged successfully" };
  } catch (error) {
    console.error("Error merging guest cart:", error);
    return { error: "Failed to merge guest cart" };
  }
}

export async function getCurrentUser() {
  try {
    const session = await auth.api.getSession({
      headers: new Headers()
    });
    return session?.user || null;
  } catch (error) {
    return null;
  }
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return user;
}
