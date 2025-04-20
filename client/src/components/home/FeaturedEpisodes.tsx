import { Link } from 'wouter';
import { featuredEpisodes } from '@/data/episodes';
import EpisodeCard from '@/components/episodes/EpisodeCard';

const FeaturedEpisodes = () => {
  return (
    <section className="py-16 bg-white" id="episodes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-4">Featured Episodes</h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Listen to our most impactful conversations about family dynamics, emotional health, and creating harmony at home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEpisodes.slice(0, 3).map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/episodes" className="inline-flex items-center text-[#B2593C] hover:underline font-semibold">
            View All Episodes 
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
