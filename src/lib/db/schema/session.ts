import { pgTable, uuid, varchar, timestamp, text } from 'drizzle-orm/pg-core';
import { user } from './user';

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => user.id).notNull(),
  token: varchar('token', { length: 255 }).unique().notNull(),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: varchar('user_agent', { length: 500 }),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Session = typeof session.$inferSelect;
export type NewSession = typeof session.$inferInsert;
