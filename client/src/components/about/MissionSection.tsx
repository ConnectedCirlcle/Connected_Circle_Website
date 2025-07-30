const AboutPodcastSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-b from-medium-purple/5 to-dark-bg relative overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-xl animate-pulse delay-1000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Section label */}
            <div className="relative mb-6">
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>
              <span className="text-vibrant-green font-semibold text-lg">
                About the Podcast
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Where
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Connection{" "}
              </span>
              Meets Growth
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Connected Circles is more than a podcast—it's a movement toward
              authentic living and meaningful relationships. We explore the
              depths of personal growth, the art of genuine connection, and the
              power of community to transform lives.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Through vulnerable conversations, expert insights, and shared
              wisdom, we create a safe space where growth happens naturally and
              connections flourish authentically.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Core Value - Authentic Connection */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-lg">🤝</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Authentic Connection
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Building genuine relationships through vulnerability and
                      shared experiences
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Value - Personal Growth */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-lg">🌱</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Personal Growth
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Embracing continuous learning and transformation through
                      life's journey
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Value - Meaningful Dialogue */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-lg">💬</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Meaningful Dialogue
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Creating space for deep conversations that inspire and
                      transform
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Value - Community Building */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medium-purple to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white text-lg">🌐</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Community Building
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Fostering supportive circles where everyone can thrive and
                      grow together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            {/* Main circular container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Large central circle */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-electric-blue to-vibrant-green shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="People in meaningful conversation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Smaller orbiting circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full overflow-hidden border-2 border-rich-violet shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full overflow-hidden border-2 border-vibrant-green shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="Personal growth journey"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Connecting lines between circles */}
              <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-electric-blue/50 to-transparent transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-28 h-px bg-gradient-to-r from-vibrant-green/50 to-transparent transform -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPodcastSection;
