import { pgTable, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const guest = pgTable('guest', {
  id: text('id').primaryKey(),
  sessionToken: varchar('session_token', { length: 255 }).unique().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  expiresAt: timestamp('expires_at').notNull(),
});

export type Guest = typeof guest.$inferSelect;
export type NewGuest = typeof guest.$inferInsert;
