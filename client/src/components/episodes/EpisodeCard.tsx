import { Episode } from "@/lib/types";
import { Link } from "wouter";
import { useState } from "react";

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control the audio playback
  };

  // Function to format playback time (e.g., "14:22")
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#1E4B87] bg-opacity-10 rounded-xl overflow-hidden shadow-lg episode-card transition-transform duration-300">
      <img
        src={episode.image}
        alt={`Episode thumbnail for ${episode.title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block bg-[#7EADA3] text-white text-xs px-3 py-1 rounded-full">
            {episode.topics[0]}
          </span>
          <span className="text-[#8A8A8A] text-sm">{episode.duration}</span>
        </div>
        <h3 className="font-['Playfair_Display'] font-bold text-xl mb-2">
          {episode.title}
        </h3>
        {/* Changed only this line: made description text black for better readability */}
        <p className="text-black mb-4 line-clamp-3">{episode.summary}</p>

        {/* Podcast Player */}
        <div className="bg-white p-3 rounded-lg mb-4">
          <div className="flex items-center">
            <button
              className="bg-[#F9B233] text-[#1E4B87] rounded-full w-10 h-10 flex items-center justify-center"
              onClick={togglePlayback}
            >
              <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
            </button>
            <div className="ml-3 flex-grow">
              <div
                className="bg-gray-200 h-2 rounded-full cursor-pointer"
                onClick={(e) => {
                  // Calculate position based on click
                  const rect = e.currentTarget.getBoundingClientRect();
                  const position = (e.clientX - rect.left) / rect.width;
                  setPlaybackPosition(position);
                }}
              >
                <div
                  className="bg-[#F9B233] h-2 rounded-full"
                  style={{ width: `${playbackPosition * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="ml-3 text-[#8A8A8A]">
              {formatTime(playbackPosition * 60 * 43)}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <a href="#" className="text-[#8A8A8A] hover:text-[#F9B233]">
              <i className="fas fa-share-alt"></i>
            </a>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] hover:text-[#F9B233]"
            >
              <i className="fab fa-spotify"></i>
            </a>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] hover:text-[#F9B233]"
            >
              <i className="fas fa-podcast"></i>
            </a>
          </div>
          <Link
            href={`/episodes/${episode.id}`}
            className="text-[#F9B233] hover:underline font-semibold"
          >
            Full Episode
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
