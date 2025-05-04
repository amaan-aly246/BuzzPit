import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: varchar("first_name", { length: 255 }).default("FirstName"),
  lastName: varchar("last_name", { length: 255 }).default("LastName"),
  userName: varchar("user_name", { length: 255 }).unique().notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  posts: uuid("posts").array().default([]),
  likedPosts: uuid("likedPosts").array().default([]),
  dislikedPosts : uuid('dislikedPosts').array().default([]),
});


