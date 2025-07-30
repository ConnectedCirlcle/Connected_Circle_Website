import { Link } from "wouter";

const ConnectSection = () => {
  return (
    <div className="relative">
      {/* Circular accent */}
      <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple opacity-70"></div>

      <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 shadow-xl">
        <div className="relative mb-8">
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Our
            <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
              {" "}
              Circle
            </span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Connect with us across platforms and become part of our growing
            community of seekers, dreamers, and changemakers.
          </p>
        </div>

        <div className="space-y-8">
          {/* Email Section */}
          <div className="group">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fas fa-envelope text-white"></i>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">
                  Email Us Directly
                </h4>
                <a
                  href="mailto:hello@connectedcircles.com"
                  className="text-electric-blue hover:text-vibrant-green transition-colors duration-300 font-medium"
                >
                  hello@connected-circles.com
                </a>
                <p className="text-gray-400 text-sm mt-1">
                  For deeper conversations and personal stories
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-vibrant-green"></div>
              <span>Follow Our Journey</span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://instagram.com/connectedcircles"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-br hover:from-electric-blue hover:to-vibrant-green p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-instagram text-white mr-2"></i>
                  <span className="text-white font-medium">Instagram</span>
                </div>
              </a>
              <a
                href="https://twitter.com/connectedcircles"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-br hover:from-vibrant-green hover:to-rich-violet p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-twitter text-white mr-2"></i>
                  <span className="text-white font-medium">Twitter</span>
                </div>
              </a>
              <a
                href="https://facebook.com/connectedcircles"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-br hover:from-rich-violet hover:to-medium-purple p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-facebook-f text-white mr-2"></i>
                  <span className="text-white font-medium">Facebook</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/company/connectedcircles"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-br hover:from-medium-purple hover:to-electric-blue p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-linkedin text-white mr-2"></i>
                  <span className="text-white font-medium">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>

          {/* Podcast Platforms Section */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
              <span>Listen & Subscribe</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-r hover:from-electric-blue hover:to-vibrant-green p-4 rounded-lg flex items-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-spotify text-white mr-3 text-lg"></i>
                  <div>
                    <span className="text-white font-medium block">
                      Spotify
                    </span>
                    <span className="text-gray-400 text-xs">Most popular</span>
                  </div>
                </div>
              </a>
              <a
                href="https://podcasts.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-r hover:from-vibrant-green hover:to-rich-violet p-4 rounded-lg flex items-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-apple text-white mr-3 text-lg"></i>
                  <div>
                    <span className="text-white font-medium block">
                      Apple Podcasts
                    </span>
                    <span className="text-gray-400 text-xs">iOS & Mac</span>
                  </div>
                </div>
              </a>
              <a
                href="https://podcasts.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 hover:bg-gradient-to-r hover:from-rich-violet hover:to-medium-purple p-4 rounded-lg flex items-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fab fa-google text-white mr-3 text-lg"></i>
                  <div>
                    <span className="text-white font-medium block">
                      Google Podcasts
                    </span>
                    <span className="text-gray-400 text-xs">Android</span>
                  </div>
                </div>
              </a>
              <a href="/rss" className="group">
                <div className="bg-white/10 hover:bg-gradient-to-r hover:from-medium-purple hover:to-electric-blue p-4 rounded-lg flex items-center transition-all duration-300 group-hover:scale-105 border border-electric-blue/20 hover:border-transparent">
                  <i className="fas fa-rss text-white mr-3 text-lg"></i>
                  <div>
                    <span className="text-white font-medium block">
                      RSS Feed
                    </span>
                    <span className="text-gray-400 text-xs">Direct access</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Community CTA */}
          <div className="bg-gradient-to-r from-electric-blue/20 to-vibrant-green/20 p-6 rounded-lg border border-electric-blue/30">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center">
                <i className="fas fa-users text-white"></i>
              </div>
              <h5 className="font-semibold text-white mb-2">
                Join Our Community
              </h5>
              <p className="text-gray-300 text-sm mb-4">
                Connect with like-minded individuals on their growth journey
              </p>
              <Link
                href="/community"
                className="inline-flex items-center space-x-2 text-electric-blue hover:text-vibrant-green transition-colors duration-300 font-medium"
              >
                <span>Explore Community</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
