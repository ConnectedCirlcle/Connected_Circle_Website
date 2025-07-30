import { BuzzsproutEpisode, Episode } from "./types";

// Buzzsprout configuration
// Note: The podcast ID needs to be obtained from the Buzzsprout account
// It can be found in the Buzzsprout dashboard URL: https://www.buzzsprout.com/PODCAST_ID
const BUZZSPROUT_PODCAST_ID = import.meta.env.VITE_BUZZSPROUT_PODCAST_ID || "YOUR_PODCAST_ID";
const BUZZSPROUT_API_TOKEN = "96156725a08a598bc6d43cffe30892d1";

// Helper function to format duration from seconds to "X min" format
function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} min`;
}

// Helper function to extract topics from tags
function extractTopics(tags: string): string[] {
  if (!tags) return ["Personal Growth"]; // Default topic
  return tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);
}

// Transform Buzzsprout episode to our Episode format
function transformBuzzsproutEpisode(buzzsproutEpisode: BuzzsproutEpisode): Episode {
  return {
    id: buzzsproutEpisode.id,
    title: buzzsproutEpisode.title,
    summary: buzzsproutEpisode.summary || buzzsproutEpisode.description || "No description available",
    image: buzzsproutEpisode.artwork_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: formatDuration(buzzsproutEpisode.duration),
    topics: extractTopics(buzzsproutEpisode.tags),
    audioUrl: buzzsproutEpisode.audio_url,
    publishedAt: buzzsproutEpisode.published_at,
    episodeNumber: buzzsproutEpisode.episode_number,
    seasonNumber: buzzsproutEpisode.season_number,
    totalPlays: buzzsproutEpisode.total_plays,
  };
}

// Fetch episodes from Buzzsprout API
export async function fetchBuzzsproutEpisodes(): Promise<Episode[]> {
  try {
    // Check if podcast ID is configured
    if (!BUZZSPROUT_PODCAST_ID || BUZZSPROUT_PODCAST_ID === "YOUR_PODCAST_ID") {
      console.warn('Buzzsprout podcast ID not configured. Using fallback episodes.');
      return [];
    }

    const response = await fetch(
      `https://www.buzzsprout.com/api/${BUZZSPROUT_PODCAST_ID}/episodes.json?api_token=${BUZZSPROUT_API_TOKEN}`,
      {
        headers: {
          'User-Agent': 'Connected Circles Website',
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Buzzsprout API error: ${response.status} ${response.statusText}`);
    }

    const buzzsproutEpisodes: BuzzsproutEpisode[] = await response.json();
    
    // Filter out private episodes and transform to our format
    const publicEpisodes = buzzsproutEpisodes
      .filter(episode => !episode.private && !episode.inactive_at)
      .map(transformBuzzsproutEpisode)
      .sort((a, b) => new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime());

    return publicEpisodes;
  } catch (error) {
    console.error('Error fetching episodes from Buzzsprout:', error);
    // Return empty array if API fails - components will handle fallback
    return [];
  }
}

// Get featured episodes (latest 3)
export async function getFeaturedEpisodes(): Promise<Episode[]> {
  const allEpisodes = await fetchBuzzsproutEpisodes();
  return allEpisodes.slice(0, 3);
}

// Get all episodes
export async function getAllEpisodes(): Promise<Episode[]> {
  return await fetchBuzzsproutEpisodes();
}