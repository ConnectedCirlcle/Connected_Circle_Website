import { hosts } from "@/data/hosts";

const HostsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-medium-purple/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 blur-lg animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-rich-violet/20 to-medium-purple/20 blur-lg animate-pulse delay-1000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section heading with circular accent */}
          <div className="relative mb-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Your
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Host
              </span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Get to know the voice and heart behind Connected Circles, bringing
            you authentic conversations about growth, connection, and the
            journey of becoming our truest selves.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {hosts.map((host, index) => (
            <div
              key={host.id}
              className={`group relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex gap-8 items-center`}
            >
              {/* Circular accent for each host card */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "-top-4 -left-4" : "-top-4 -right-4"
                } w-8 h-8 rounded-full ${
                  index === 0
                    ? "bg-gradient-to-br from-electric-blue to-vibrant-green"
                    : "bg-gradient-to-br from-vibrant-green to-rich-violet"
                } opacity-70`}
              ></div>

              {/* Host Image */}
              <div className="md:w-2/5 relative">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                  {/* Main circular image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-electric-blue to-vibrant-green shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={host.image}
                      alt={`${host.name}, podcast host`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Orbiting accent circles */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-vibrant-green to-electric-blue opacity-80 group-hover:scale-110 transition-transform duration-300 delay-100"></div>
                </div>
              </div>

              {/* Host Info */}
              <div className="md:w-3/5 text-center md:text-left">
                <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-electric-blue/20 group-hover:border-electric-blue/40 transition-all duration-300 shadow-xl">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                    {host.name}
                  </h3>
                  <p className="text-vibrant-green text-lg font-medium mb-6">
                    {host.role}
                  </p>
                  <div className="text-gray-300 mb-8 leading-relaxed text-lg space-y-4">
                    {host.bio.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start space-x-4">
                    {host.socialLinks.instagram && (
                      <a
                        href={host.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 shadow-lg">
                          <i className="fab fa-instagram text-white text-lg"></i>
                        </div>
                      </a>
                    )}
                    {host.socialLinks.twitter && (
                      <a
                        href={host.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 shadow-lg">
                          <i className="fab fa-twitter text-white text-lg"></i>
                        </div>
                      </a>
                    )}
                    {host.socialLinks.linkedin && (
                      <a
                        href={host.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover/social:scale-110 transition-transform duration-300 shadow-lg">
                          <i className="fab fa-linkedin text-white text-lg"></i>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection visualization */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-electric-blue animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-electric-blue to-vibrant-green"></div>
            <div className="w-4 h-4 rounded-full bg-vibrant-green animate-pulse delay-500"></div>
            <div className="w-16 h-px bg-gradient-to-r from-vibrant-green to-rich-violet"></div>
            <div className="w-3 h-3 rounded-full bg-rich-violet animate-pulse delay-1000"></div>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Connected through shared purpose
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
