import { Link } from "wouter";
import { PrimaryButton, OutlineButton } from "@/components/ui/button-variants";

const HeroSection = () => {
  return (
    <section className="relative bg-dark-bg py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg/95 to-medium-purple/20"></div>

        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-rich-violet/20 to-medium-purple/20 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-vibrant-green/10 to-electric-blue/10 blur-2xl animate-pulse delay-2000"></div>

        {/* Connecting lines - positioned above and below text content */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with circular accent */}
          <div className="relative mb-6">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-20 blur-sm"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-electric-blue via-vibrant-green to-rich-violet bg-clip-text text-transparent">
                Connected
              </span>
              <br />
              <span className="text-white">Circles</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Where meaningful conversations spark personal growth and authentic
            connections. Join our community of seekers, dreamers, and
            changemakers on a journey of
            <span className="text-vibrant-green font-medium">
              {" "}
              transformation
            </span>{" "}
            and
            <span className="text-electric-blue font-medium"> discovery</span>.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <PrimaryButton asChild size="lg">
              <a
                href="https://podcasters.spotify.com/pod/show"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px]"
              >
                🎧 Listen Now
              </a>
            </PrimaryButton>
            <OutlineButton asChild size="lg">
              <Link href="/episodes" className="min-w-[200px]">
                Explore Episodes
              </Link>
            </OutlineButton>
          </div>

          {/* Connection stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">50+</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rich-violet opacity-80"></div>
              </div>
              <p className="text-gray-400 text-sm">Episodes</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">10K+</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-electric-blue opacity-80"></div>
              </div>
              <p className="text-gray-400 text-sm">Community Members</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">∞</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-vibrant-green opacity-80"></div>
              </div>
              <p className="text-gray-400 text-sm">Connections Made</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-current text-dark-bg"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
