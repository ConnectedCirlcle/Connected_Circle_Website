import SurveySection from "@/components/community/SurveySection";
import JoinTheCircleSection from "@/components/home/NewsletterSection";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/button-variants";

const Community = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-dark-bg via-medium-purple/5 to-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-vibrant-green/5 to-electric-blue/5 blur-xl animate-pulse delay-2000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Community
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Connect with like-minded individuals on their growth journey. Share
            experiences, learn together, and build meaningful relationships in
            our supportive community spaces.
          </p>
        </div>

        {/* Community Platforms */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Where We
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Gather
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find us across different platforms where our community comes
              together for conversations, live interactions, and shared growth
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* YouTube Community */}
            <div className="group">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>
                <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl group-hover:border-electric-blue/40 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-youtube text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        YouTube Community
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Video discussions & live streams
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Join our YouTube community for video episodes, live Q&A
                    sessions, and behind-the-scenes content. Engage with
                    comments and participate in community posts.
                  </p>
                  <PrimaryButton asChild className="w-full">
                    <a
                      href="https://youtube.com/@connectedcircles?si=MOcqdqUBEthj9xRf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <i className="fab fa-youtube"></i>
                        <span>Join on YouTube</span>
                      </div>
                    </a>
                  </PrimaryButton>
                </div>
              </div>
            </div>

            {/* Twitch Community */}
            <div className="group">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet opacity-70"></div>
                {/* Coming Soon Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-electric-blue to-vibrant-green text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                  Coming Soon
                </div>
                <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl group-hover:border-electric-blue/40 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-twitch text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Twitch Streams
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Live interactive conversations
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Experience real-time conversations on Twitch with live chat
                    interaction, spontaneous discussions, and immediate
                    community feedback.
                  </p>
                  <SecondaryButton asChild className="w-full">
                    <a
                      href="https://twitch.tv/connectedcircles"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <i className="fab fa-twitch"></i>
                        <span>Follow on Twitch</span>
                      </div>
                    </a>
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Platforms */}
          <div className="bg-gradient-to-r from-electric-blue/10 via-vibrant-green/5 to-rich-violet/10 rounded-2xl p-8 border border-electric-blue/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We're expanding our community presence to give you more ways to
                connect and grow together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Discord */}
              <div className="bg-dark-bg/30 rounded-xl p-6 border border-electric-blue/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center opacity-70">
                    <i className="fab fa-discord text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Discord Server</h4>
                    <p className="text-gray-400 text-sm">
                      Real-time chat & voice channels
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  A dedicated space for ongoing conversations, voice chats, and
                  building deeper connections with fellow community members.
                </p>
              </div>

              {/* Reddit */}
              <div className="bg-dark-bg/30 rounded-xl p-6 border border-electric-blue/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medium-purple to-electric-blue flex items-center justify-center opacity-70">
                    <i className="fab fa-reddit text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Reddit Community
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Discussion threads & resources
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Share insights, ask questions, and engage in threaded
                  discussions about personal growth and meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Survey and Newsletter Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SurveySection />
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple opacity-70"></div>
            <JoinTheCircleSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
