import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertFocusGroupSignupSchema, insertSubscriberSchema, insertPollVoteSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/subscribe", async (req, res) => {
    try {
      const data = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.addSubscriber(data);
      res.status(201).json({ message: "Subscription successful", subscriber });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.addContactSubmission(data);
      res.status(201).json({ message: "Message sent successfully", submission });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  });

  app.post("/api/focus-group-signup", async (req, res) => {
    try {
      const data = insertFocusGroupSignupSchema.parse(req.body);
      const signup = await storage.addFocusGroupSignup(data);
      res.status(201).json({ message: "Signup received", signup });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  });

  app.post("/api/poll-vote", async (req, res) => {
    try {
      const data = insertPollVoteSchema.parse(req.body);
      const vote = await storage.addPollVote(data);
      
      // Get updated poll results
      const pollResults = await storage.getPollResults(data.pollId);
      
      res.status(201).json({ 
        message: "Vote recorded", 
        vote,
        results: pollResults
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  });

  // Get poll results
  app.get("/api/poll/:pollId/results", async (req, res) => {
    try {
      const pollId = parseInt(req.params.pollId);
      if (isNaN(pollId)) {
        return res.status(400).json({ message: "Invalid poll ID" });
      }
      
      const results = await storage.getPollResults(pollId);
      res.json(results);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
