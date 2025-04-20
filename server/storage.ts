import { 
  users, type User, type InsertUser,
  type InsertSubscriber, type Subscriber,
  type InsertContactSubmission, type ContactSubmission,
  type InsertFocusGroupSignup, type FocusGroupSignup,
  type InsertPollVote, type PollVote
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
  
  // Poll vote methods
  addPollVote(vote: InsertPollVote): Promise<PollVote>;
  getPollResults(pollId: number): Promise<any>; // Returns poll results
}

// Poll option type for in-memory storage
interface PollOptionResult {
  id: number;
  text: string;
  votes: number;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private focusGroupSignups: Map<number, FocusGroupSignup>;
  private pollVotes: Map<number, PollVote>;
  
  // Track current IDs for each entity
  private userIdCounter: number;
  private subscriberIdCounter: number;
  private contactSubmissionIdCounter: number;
  private focusGroupSignupIdCounter: number;
  private pollVoteIdCounter: number;
  
  // Mock poll data for demonstration
  private polls: Map<number, { question: string, options: PollOptionResult[] }>;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.contactSubmissions = new Map();
    this.focusGroupSignups = new Map();
    this.pollVotes = new Map();
    
    this.userIdCounter = 1;
    this.subscriberIdCounter = 1;
    this.contactSubmissionIdCounter = 1;
    this.focusGroupSignupIdCounter = 1;
    this.pollVoteIdCounter = 1;
    
    // Initialize mock poll data
    this.polls = new Map();
    this.polls.set(1, {
      question: "What topic would you like us to cover next?",
      options: [
        { id: 1, text: "Navigating In-Law Relationships", votes: 126 },
        { id: 2, text: "Teaching Kids Financial Literacy", votes: 269 },
        { id: 3, text: "Work-Life Balance for Parents", votes: 236 },
        { id: 4, text: "Technology Boundaries for Families", votes: 211 }
      ]
    });
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
  
  // Poll vote methods
  async addPollVote(insertVote: InsertPollVote): Promise<PollVote> {
    const id = this.pollVoteIdCounter++;
    const dateVoted = new Date();
    const vote: PollVote = { ...insertVote, id, dateVoted };
    this.pollVotes.set(id, vote);
    
    // Update poll results
    const poll = this.polls.get(insertVote.pollId);
    if (poll) {
      const option = poll.options.find(opt => opt.id === insertVote.optionId);
      if (option) {
        option.votes += 1;
      }
    }
    
    return vote;
  }
  
  // Get poll results
  async getPollResults(pollId: number): Promise<any> {
    const poll = this.polls.get(pollId);
    if (!poll) {
      return { error: "Poll not found" };
    }
    
    const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);
    
    return {
      question: poll.question,
      options: poll.options.map(option => ({
        id: option.id,
        text: option.text,
        votes: option.votes,
        percentage: totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0
      })),
      totalVotes
    };
  }
}

export const storage = new MemStorage();
