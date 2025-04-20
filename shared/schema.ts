import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model (keeping the existing one)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Newsletter Subscribers
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  dateSubscribed: timestamp("date_subscribed").defaultNow().notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
});

// Contact Form Submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  dateSubmitted: timestamp("date_submitted").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

// Focus Group Signups
export const focusGroupSignups = pgTable("focus_group_signups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  familyStructure: text("family_structure").notNull(),
  reason: text("reason").notNull(),
  dateSubmitted: timestamp("date_submitted").defaultNow().notNull(),
});

export const insertFocusGroupSignupSchema = createInsertSchema(focusGroupSignups).pick({
  name: true,
  email: true,
  familyStructure: true,
  reason: true,
});

// Poll Votes
export const pollVotes = pgTable("poll_votes", {
  id: serial("id").primaryKey(),
  pollId: integer("poll_id").notNull(),
  optionId: integer("option_id").notNull(),
  dateVoted: timestamp("date_voted").defaultNow().notNull(),
});

export const insertPollVoteSchema = createInsertSchema(pollVotes).pick({
  pollId: true,
  optionId: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertFocusGroupSignup = z.infer<typeof insertFocusGroupSignupSchema>;
export type FocusGroupSignup = typeof focusGroupSignups.$inferSelect;

export type InsertPollVote = z.infer<typeof insertPollVoteSchema>;
export type PollVote = typeof pollVotes.$inferSelect;
