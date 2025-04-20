import SurveySection from '@/components/community/SurveySection';
import FocusGroupForm from '@/components/community/FocusGroupForm';
import QuickPoll from '@/components/community/QuickPoll';
import NewsletterSection from '@/components/home/NewsletterSection';

const Community = () => {
  return (
    <div className="py-16 bg-[#F8F1E6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">Join Our Community</h1>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Connect with other listeners, share your experiences, and help shape future episodes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SurveySection />
          <FocusGroupForm />
        </div>
        
        <QuickPoll />
      </div>
      
      <div className="mt-16">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Community;
