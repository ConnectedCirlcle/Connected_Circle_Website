// Buzzsprout Episode (from API)
export interface BuzzsproutEpisode {
  id: number;
  title: string;
  audio_url: string;
  artwork_url: string;
  description: string;
  summary: string;
  artist: string;
  tags: string;
  published_at: string;
  duration: number;
  hq: boolean;
  magic_mastering: boolean;
  guid: string;
  inactive_at: string | null;
  episode_number: number;
  season_number: number;
  explicit: boolean;
  private: boolean;
  total_plays: number;
}

// Podcast Episode (our format)
export interface Episode {
  id: number;
  title: string;
  summary: string;
  image: string;
  duration: string;
  topics: string[];
  audioUrl: string;
  publishedAt?: string;
  episodeNumber?: number;
  seasonNumber?: number;
  totalPlays?: number;
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
