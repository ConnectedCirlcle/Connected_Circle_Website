import { useState, useEffect } from 'react';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import { allEpisodes } from '@/data/episodes';
import { topics } from '@/data/topics';
import { Episode } from '@/lib/types';

const Episodes = () => {
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>(allEpisodes);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  useEffect(() => {
    if (selectedTopic) {
      const filtered = allEpisodes.filter(episode => 
        episode.topics.some(topic => topic.toLowerCase() === selectedTopic.toLowerCase())
      );
      setFilteredEpisodes(filtered);
    } else {
      setFilteredEpisodes(allEpisodes);
    }
  }, [selectedTopic]);
  
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">Our Episodes</h1>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Dive into our collection of conversations about family life, relationships, and personal growth.
          </p>
        </div>
        
        {/* Filter by topic */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              className={`px-4 py-2 rounded-full ${
                selectedTopic === null 
                  ? 'bg-[#B2593C] text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
              onClick={() => setSelectedTopic(null)}
            >
              All Episodes
            </button>
            
            {topics.map(topic => (
              <button 
                key={topic.id}
                className={`px-4 py-2 rounded-full ${
                  selectedTopic === topic.name.toLowerCase() 
                    ? 'bg-[#B2593C] text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                } transition-colors`}
                onClick={() => setSelectedTopic(topic.name.toLowerCase())}
              >
                <i className={`${topic.icon} mr-2`}></i>
                {topic.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Episode grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-[#8A8A8A]">No episodes found for this topic yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
