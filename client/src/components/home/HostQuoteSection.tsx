const HostQuoteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-rich-violet/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-16 right-16 w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue/15 to-vibrant-green/15 blur-lg animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-rich-violet/15 to-medium-purple/15 blur-xl animate-pulse delay-1000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section label */}
          <div className="relative mb-8 inline-block">
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-vibrant-green to-electric-blue opacity-70"></div>
            <span className="text-vibrant-green font-semibold text-lg">
              A Message from Linda
            </span>
          </div>

          {/* Quote container */}
          <div className="relative">
            {/* Large quote mark */}
            <div className="absolute -top-8 -left-4 text-6xl text-electric-blue/30 font-serif">
              "
            </div>

            {/* Quote content */}
            <div className="bg-dark-bg/50 backdrop-blur-sm rounded-3xl p-12 border border-electric-blue/20 shadow-2xl">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  At times the world can feel overwhelming. There's so much
                  noise, division, and uncertainty out there, and it can be hard
                  to find a space that feels grounding and real. That's why I
                  started Connected Circles.
                </p>

                <p>
                  I wanted to create a place where we can talk honestly about
                  life—things like suicide, addiction, and grief—because those
                  conversations are important. But we'll also celebrate the
                  meaningful moments: births, graduations, weddings, and all the
                  everyday wins that make life beautiful.
                </p>

                <p>
                  At the core of it all is this belief I hold close: we have way
                  more in common than what separates us. So if you're looking
                  for connection, clarity, or just a moment to breathe and feel
                  understood, I'd love for you to join me. Let's focus on what
                  really matters—together.
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-8 pt-6 border-t border-electric-blue/20">
                <div className="flex items-center justify-center space-x-4">
                  {/* Host photo */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gradient-to-br from-electric-blue to-vibrant-green shadow-lg">
                      <img
                        src="/Linda_Green.jpg"
                        alt="Linda Green"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-vibrant-green to-electric-blue"></div>
                  </div>

                  {/* Name and title */}
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-lg">
                      Linda Green
                    </h4>
                    <p className="text-vibrant-green text-sm">
                      Host & Creator of Connected Circles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large closing quote mark */}
            <div className="absolute -bottom-4 -right-4 text-6xl text-electric-blue/30 font-serif">
              "
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center items-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-electric-blue animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-electric-blue to-vibrant-green"></div>
            <div className="w-4 h-4 rounded-full bg-vibrant-green animate-pulse delay-500"></div>
            <div className="w-16 h-px bg-gradient-to-r from-vibrant-green to-rich-violet"></div>
            <div className="w-3 h-3 rounded-full bg-rich-violet animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostQuoteSection;
