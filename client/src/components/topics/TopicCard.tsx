import { Topic } from '@/lib/types';
import { Link } from 'wouter';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard = ({ topic }: TopicCardProps) => {
  return (
    <Link 
      href={`/topics/${topic.name.toLowerCase()}`} 
      className="bg-[#F8F1E6] hover:bg-[#B2593C] hover:text-white group rounded-xl p-6 text-center transition-colors duration-300"
    >
      <div className="bg-white group-hover:bg-[#B2593C] group-hover:bg-opacity-20 text-[#B2593C] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <i className={`${topic.icon} text-2xl`}></i>
      </div>
      <h3 className="font-semibold text-lg">{topic.name}</h3>
      <p className="text-[#8A8A8A] group-hover:text-white text-sm mt-2">{topic.episodeCount} episodes</p>
    </Link>
  );
};

export default TopicCard;
