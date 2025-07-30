import { Episode } from "@/lib/types";
import { getFeaturedEpisodes, getAllEpisodes } from "@/lib/buzzsprout";

// Fallback episodes (used when Buzzsprout API is unavailable or no episodes exist)
export const fallbackFeaturedEpisodes: Episode[] = [
  {
    id: 1,
    title: "Building Authentic Connections in a Digital World",
    summary: "Explore how to create meaningful relationships and foster genuine community in our increasingly connected yet isolated world.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "45 min",
    topics: ["Connection", "Community"],
    audioUrl: "https://example.com/podcast/ep1.mp3",
  },
  {
    id: 2,
    title: "The Growth Mindset: Embracing Change and Challenge",
    summary: "Discover how adopting a growth mindset can transform your approach to personal development and help you thrive through life's challenges.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "38 min",
    topics: ["Personal Growth", "Mindset"],
    audioUrl: "https://example.com/podcast/ep2.mp3",
  },
  {
    id: 3,
    title: "Creating Circles of Support: The Power of Community",
    summary: "Learn how to build and nurture supportive communities that foster personal growth, shared learning, and meaningful connections.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "52 min",
    topics: ["Community", "Support"],
    audioUrl: "https://example.com/podcast/ep3.mp3",
  },
  {
    id: 4,
    title: "Vulnerability as Strength: Opening Up for Growth",
    summary: "Explore how embracing vulnerability can lead to deeper connections, personal breakthroughs, and authentic relationships.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "41 min",
    topics: ["Personal Growth", "Authenticity"],
    audioUrl: "https://example.com/podcast/ep4.mp3",
  },
  {
    id: 5,
    title: "The Art of Deep Listening: Transforming Conversations",
    summary: "Master the skills of active listening and meaningful dialogue to create more profound connections and understanding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "47 min",
    topics: ["Communication", "Connection"],
    audioUrl: "https://example.com/podcast/ep5.mp3",
  },
  {
    id: 6,
    title: "Finding Your Purpose: Aligning Values with Action",
    summary: "Discover how to identify your core values and align your daily actions with your deeper purpose for a more fulfilling life.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "49 min",
    topics: ["Purpose", "Personal Growth"],
    audioUrl: "https://example.com/podcast/ep6.mp3",
  }
];

export const fallbackAllEpisodes: Episode[] = [
  ...fallbackFeaturedEpisodes,
  {
    id: 7,
    title: "Navigating Life Transitions with Grace",
    summary: "Learn strategies for moving through major life changes while maintaining your sense of self and connection to others.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "44 min",
    topics: ["Change", "Personal Growth"],
    audioUrl: "https://example.com/podcast/ep7.mp3",
  },
  {
    id: 8,
    title: "The Science of Happiness: Building Joy from Within",
    summary: "Explore evidence-based practices for cultivating lasting happiness and well-being in your daily life.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "43 min",
    topics: ["Happiness", "Well-being"],
    audioUrl: "https://example.com/podcast/ep8.mp3",
  },
  {
    id: 9,
    title: "Breaking Through Limiting Beliefs",
    summary: "Identify and overcome the mental barriers that hold you back from reaching your full potential and living authentically.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "46 min",
    topics: ["Mindset", "Personal Growth"],
    audioUrl: "https://example.com/podcast/ep9.mp3",
  },
  {
    id: 10,
    title: "Creating Meaningful Rituals and Practices",
    summary: "Discover how to design personal rituals and daily practices that support your growth and deepen your connections.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "40 min",
    topics: ["Rituals", "Personal Growth"],
    audioUrl: "https://example.com/podcast/ep10.mp3",
  }
];

// API functions that fetch from Buzzsprout only (no fallback to example data)
export async function getFeaturedEpisodesData(): Promise<Episode[]> {
  try {
    const buzzsproutEpisodes = await getFeaturedEpisodes();
    return buzzsproutEpisodes;
  } catch (error) {
    console.error('Error fetching featured episodes:', error);
    return [];
  }
}

export async function getAllEpisodesData(): Promise<Episode[]> {
  try {
    const buzzsproutEpisodes = await getAllEpisodes();
    return buzzsproutEpisodes;
  } catch (error) {
    console.error('Error fetching all episodes:', error);
    return [];
  }
}

// Export static data for backward compatibility
export const featuredEpisodes = fallbackFeaturedEpisodes;
export const allEpisodes = fallbackAllEpisodes;
