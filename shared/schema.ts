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

// Add CSRF token validation to the subscriber schema
export const insertSubscriberSchema = createInsertSchema(subscribers)
  .pick({
    email: true,
  })
  .extend({
    csrfToken: z.string().optional(),
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

// Add CSRF token validation to the contact submission schema
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions)
  .pick({
    name: true,
    email: true,
    subject: true,
    message: true,
  })
  .extend({
    csrfToken: z.string().optional(),
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

// Add CSRF token validation to the focus group signup schema
export const insertFocusGroupSignupSchema = createInsertSchema(focusGroupSignups)
  .pick({
    name: true,
    email: true,
    familyStructure: true,
    reason: true,
  })
  .extend({
    csrfToken: z.string().optional(),
  });

// Poll Votes section removed

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertFocusGroupSignup = z.infer<typeof insertFocusGroupSignupSchema>;
export type FocusGroupSignup = typeof focusGroupSignups.$inferSelect;

// Poll vote types removed
