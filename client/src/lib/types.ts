// Podcast Episode
export interface Episode {
  id: number;
  title: string;
  summary: string;
  image: string;
  duration: string;
  topics: string[];
  audioUrl: string;
}

// Podcast Host
export interface Host {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Listener Testimonial
export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

// Podcast Topic
export interface Topic {
  id: number;
  name: string;
  icon: string;
  episodeCount: number;
}

// Newsletter Subscriber
export interface Subscriber {
  id: number;
  email: string;
  dateSubscribed: Date;
}

// Contact Form Submission
export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  dateSubmitted: Date;
}

// Focus Group Sign-up
export interface FocusGroupSignup {
  id: number;
  name: string;
  email: string;
  familyStructure: string;
  reason: string;
  dateSubmitted: Date;
}

// Poll Option
export interface PollOption {
  id: number;
  text: string;
  votes: number;
}

// Poll
export interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  totalVotes: number;
}
