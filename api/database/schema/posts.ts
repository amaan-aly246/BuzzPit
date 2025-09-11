import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
  text,
} from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const postsTable = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),

  title: varchar("title", { length: 125 }).notNull(),

  content: text("content").notNull(),

  likes: integer("likes").notNull().default(0),
  dislikes: integer("dislikes").notNull().default(0),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),

  creatorId: uuid("creator_id")
    .notNull()
    .references(() => usersTable.id, {
      onDelete: "set null", 
    }),
});
