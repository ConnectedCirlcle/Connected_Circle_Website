import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/button-variants";

const Topics = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg via-medium-purple/5 to-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-vibrant-green/5 to-electric-blue/5 blur-xl animate-pulse delay-2000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Watch
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Connected Circles
              </span>
              <br />
              on YouTube
            </h1>
          </div>
          <p className="text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed mb-8">
            Experience our conversations in a whole new way! Join us on YouTube
            for video episodes, behind-the-scenes content, live discussions, and
            exclusive community interactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PrimaryButton asChild size="lg">
              <a
                href="https://youtube.com/@connectedcircles?si=MOcqdqUBEthj9xRf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px]"
              >
                <div className="flex items-center space-x-2">
                  <i className="fab fa-youtube text-xl"></i>
                  <span>Subscribe Now</span>
                </div>
              </a>
            </PrimaryButton>
            <SecondaryButton asChild size="lg">
              <a
                href="https://youtube.com/@connectedcircles?si=MOcqdqUBEthj9xRf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px]"
              >
                <div className="flex items-center space-x-2">
                  <i className="fas fa-play text-lg"></i>
                  <span>Watch Episodes</span>
                </div>
              </a>
            </SecondaryButton>
          </div>
        </div>

        {/* YouTube Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Video Episodes */}
          <div className="group">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>
              <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl group-hover:border-electric-blue/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-video text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Video Episodes
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Watch full-length episodes with visual storytelling, guest
                  interactions, and deeper engagement through video format.
                </p>
              </div>
            </div>
          </div>

          {/* Live Streams */}
          <div className="group">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet opacity-70"></div>
              <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl group-hover:border-electric-blue/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-broadcast-tower text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Live Discussions
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Join live streams for real-time conversations, Q&A sessions,
                  and community discussions about growth and connection.
                </p>
              </div>
            </div>
          </div>

          {/* Behind the Scenes */}
          <div className="group">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple opacity-70"></div>
              <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl group-hover:border-electric-blue/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-camera text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Behind the Scenes
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Get exclusive behind-the-scenes content, host insights, and
                  the stories behind our conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Stats */}
        <div className="bg-gradient-to-r from-electric-blue/10 via-vibrant-green/5 to-rich-violet/10 rounded-2xl p-8 border border-electric-blue/20 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Growing
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                YouTube Community
              </span>
            </h2>
            <p className="text-black leading-relaxed">
              Be part of a community that values authentic connection and
              meaningful growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">5K+</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rich-violet opacity-80"></div>
              </div>
              <h4 className="font-semibold text-white mb-2">Subscribers</h4>
              <p className="text-black text-sm">Growing community of seekers</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">50+</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-electric-blue opacity-80"></div>
              </div>
              <h4 className="font-semibold text-white mb-2">Video Episodes</h4>
              <p className="text-black text-sm">Deep conversations available</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">∞</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-vibrant-green opacity-80"></div>
              </div>
              <h4 className="font-semibold text-white mb-2">
                Connections Made
              </h4>
              <p className="text-black text-sm">Through shared experiences</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-electric-blue/20 to-vibrant-green/20 blur-lg"></div>
            <div className="relative bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Connect?
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Subscribe to our YouTube channel and be the first to watch new
                episodes, join live discussions, and connect with our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButton asChild>
                  <a
                    href="https://youtube.com/@connectedcircles?si=MOcqdqUBEthj9xRf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center space-x-2">
                      <i className="fab fa-youtube"></i>
                      <span>Subscribe & Ring the Bell</span>
                    </div>
                  </a>
                </PrimaryButton>
                <SecondaryButton asChild>
                  <a
                    href="https://youtube.com/@connectedcircles?si=MOcqdqUBEthj9xRf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-comments"></i>
                      <span>Join Community Tab</span>
                    </div>
                  </a>
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
