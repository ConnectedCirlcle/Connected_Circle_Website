import { topics } from '@/data/topics';
import TopicCard from '@/components/topics/TopicCard';

const Topics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">Explore Topics</h1>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Discover conversations about the aspects of family life that matter most to you.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
        
        <div className="mt-16 bg-[#F8F1E6] p-8 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold mb-4 text-center">
            Suggest a Topic
          </h2>
          <p className="text-[#8A8A8A] text-center mb-6">
            Is there a family-related topic you'd like us to explore? Let us know, and we might feature it in an upcoming episode.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              placeholder="Your topic suggestion" 
              className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B2593C]"
            />
            <button 
              type="submit" 
              className="bg-[#B2593C] hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Submit Idea
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Topics;
