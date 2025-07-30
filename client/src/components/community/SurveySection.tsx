import { PrimaryButton } from "@/components/ui/button-variants";

const SurveySection = () => {
  return (
    <div className="relative">
      {/* Circular accent */}
      <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>

      <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet opacity-70"></div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Share Your
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Voice
              </span>
            </h3>
          </div>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Your insights help shape our conversations and build a stronger
            community. Share your thoughts on personal growth, connection, and
            the topics that matter most to you.
          </p>

          {/* Survey CTA */}
          <div className="bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 rounded-xl p-6 mb-6 border border-electric-blue/20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center">
              <i className="fas fa-clipboard-list text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-white mb-2">
              Connected Circles Listener Survey
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Help us understand your growth journey and what conversations
              resonate with you most.
            </p>
            <div className="text-gray-400 text-xs mb-4">
              ⏱️ Takes 3-5 minutes • 🔒 Completely anonymous • 💡 Shapes future
              episodes
            </div>
          </div>

          <PrimaryButton asChild className="w-full">
            <a
              href="https://forms.gle/connectedcirclessurvey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-external-link-alt"></i>
                <span>Take the Survey</span>
              </div>
            </a>
          </PrimaryButton>

          <p className="text-gray-500 text-xs mt-4">
            Your feedback directly influences our content and community
            direction
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurveySection;
