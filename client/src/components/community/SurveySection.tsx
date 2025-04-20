import { RustButton } from '@/components/ui/button-variants';

const SurveySection = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md p-8">
      <h3 className="font-['Playfair_Display'] font-bold text-2xl mb-4">Listener Survey</h3>
      <p className="text-[#8A8A8A] mb-6">
        Your feedback helps us create content that truly resonates with your family's needs. 
        This quick survey takes just 3-5 minutes to complete.
      </p>
      
      {/* Survey Embed Placeholder */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
        <i className="fas fa-clipboard-list text-4xl text-[#8A8A8A] mb-4"></i>
        <h4 className="font-semibold mb-2">Heart & Household Listener Survey</h4>
        <p className="text-[#8A8A8A] mb-4">Help us understand what topics matter most to you and your family.</p>
        <RustButton asChild>
          <a 
            href="https://forms.gle/exampleSurveyLink" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Take Survey
          </a>
        </RustButton>
      </div>
    </div>
  );
};

export default SurveySection;
