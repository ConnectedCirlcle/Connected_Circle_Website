import {
  users, type User, type InsertUser,
  type InsertSubscriber, type Subscriber,
  type InsertContactSubmission, type ContactSubmission,
  type InsertFocusGroupSignup, type FocusGroupSignup
} from "@shared/schema";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscriber methods
  addSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Contact submission methods
  addContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Focus group signup methods
  addFocusGroupSignup(signup: InsertFocusGroupSignup): Promise<FocusGroupSignup>;
}

// Poll option type removed

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private focusGroupSignups: Map<number, FocusGroupSignup>;
  
  // Track current IDs for each entity
  private userIdCounter: number;
  private subscriberIdCounter: number;
  private contactSubmissionIdCounter: number;
  private focusGroupSignupIdCounter: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.contactSubmissions = new Map();
    this.focusGroupSignups = new Map();
    
    this.userIdCounter = 1;
    this.subscriberIdCounter = 1;
    this.contactSubmissionIdCounter = 1;
    this.focusGroupSignupIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subscriber methods
  async addSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberIdCounter++;
    const dateSubscribed = new Date();
    const subscriber: Subscriber = { ...insertSubscriber, id, dateSubscribed };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  // Contact submission methods
  async addContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionIdCounter++;
    const dateSubmitted = new Date();
    const submission: ContactSubmission = { ...insertSubmission, id, dateSubmitted };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  // Focus group signup methods
  async addFocusGroupSignup(insertSignup: InsertFocusGroupSignup): Promise<FocusGroupSignup> {
    const id = this.focusGroupSignupIdCounter++;
    const dateSubmitted = new Date();
    const signup: FocusGroupSignup = { ...insertSignup, id, dateSubmitted };
    this.focusGroupSignups.set(id, signup);
    return signup;
  }
  
  // Poll vote methods removed
}

export const storage = new MemStorage();
