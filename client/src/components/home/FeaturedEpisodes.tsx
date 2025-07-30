import { Link } from "wouter";
import { useState, useEffect } from "react";
import { getFeaturedEpisodesData } from "@/data/episodes";
import EpisodeCard from "@/components/episodes/EpisodeCard";
import { PrimaryButton } from "@/components/ui/button-variants";
import { Episode } from "@/lib/types";

const FeaturedEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const featuredEpisodes = await getFeaturedEpisodesData();
        setEpisodes(featuredEpisodes);
      } catch (error) {
        console.error("Error loading featured episodes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-dark-bg to-medium-purple/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
            </div>
            <p className="text-gray-300">Loading featured episodes...</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      className="py-20 bg-gradient-to-b from-dark-bg to-medium-purple/5 relative overflow-hidden"
      id="episodes"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-lg animate-pulse delay-1000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section heading with circular accent */}
          <div className="relative mb-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Episodes
              </span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Dive into transformative conversations about personal growth,
            authentic connection, and building meaningful communities. Each
            episode is a journey toward deeper understanding.
          </p>
        </div>

        {/* Episodes Grid */}
        {episodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {episodes.slice(0, 3).map((episode: Episode, index: number) => (
              <div key={episode.id} className="group">
                {/* Episode Card with circular motifs */}
                <div className="relative">
                  {/* Circular accent for each card */}
                  <div
                    className={`absolute -top-2 -left-2 w-6 h-6 rounded-full opacity-70 ${
                      index === 0
                        ? "bg-gradient-to-br from-electric-blue to-vibrant-green"
                        : index === 1
                        ? "bg-gradient-to-br from-vibrant-green to-rich-violet"
                        : "bg-gradient-to-br from-rich-violet to-medium-purple"
                    }`}
                  ></div>
                  <EpisodeCard episode={episode} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 flex items-center justify-center">
              <i className="fas fa-podcast text-electric-blue text-2xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Episodes Coming Soon
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
              We're preparing amazing conversations about personal growth,
              authentic connection, and building meaningful communities. Our
              first episodes will be available soon!
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                <span>Deep Conversations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-vibrant-green"></div>
                <span>Personal Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-rich-violet"></div>
                <span>Community Building</span>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {episodes.length > 0 && (
          <div className="text-center">
            <div className="relative inline-block">
              {/* Background circle for CTA */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-electric-blue/20 to-vibrant-green/20 blur-lg"></div>
              <PrimaryButton asChild size="lg" className="relative">
                <Link
                  href="/episodes"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Explore All Episodes</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </PrimaryButton>
            </div>

            {/* Episode stats */}
            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
                <span>50+ Episodes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-vibrant-green"></div>
                <span>Weekly Releases</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-rich-violet"></div>
                <span>Deep Conversations</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
