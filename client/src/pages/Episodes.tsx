import { useState, useEffect } from "react";
import EpisodeCard from "@/components/episodes/EpisodeCard";
import { getAllEpisodesData } from "@/data/episodes";
import { Episode } from "@/lib/types";
import { PrimaryButton } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { DOMPurify } from "@/lib/dom-purify";

const Episodes = () => {
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [topicSuggestion, setTopicSuggestion] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [csrfToken, setCsrfToken] = useState("");

  // Load episodes from API
  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const episodes = await getAllEpisodesData();
        setAllEpisodes(episodes);
        setFilteredEpisodes(episodes);
      } catch (error) {
        console.error("Error loading episodes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  // Generate a CSRF token when the component mounts
  useEffect(() => {
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);

    // Store the token in sessionStorage for verification
    sessionStorage.setItem("topic_suggestion_csrf_token", token);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allEpisodes.filter(
        (episode) =>
          episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          episode.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          episode.topics.some((topic) =>
            topic.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
      setFilteredEpisodes(filtered);
    } else {
      setFilteredEpisodes(allEpisodes);
    }
  }, [searchQuery]);

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicSuggestion.trim()) {
      toast({
        title: "Please enter a topic suggestion",
        variant: "destructive",
      });
      return;
    }

    // Verify CSRF token
    const storedToken = sessionStorage.getItem("topic_suggestion_csrf_token");
    if (csrfToken !== storedToken) {
      toast({
        title: "Security Error",
        description:
          "Form submission failed due to security validation. Please refresh the page and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Sanitize the topic suggestion
      const sanitizedTopic = DOMPurify.sanitize(topicSuggestion.trim());

      // Submit directly to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          topic_suggestion: sanitizedTopic,
          csrfToken: csrfToken,
          // Add Web3Forms access key directly
          access_key: "91706b95-f8a1-4d6d-b44f-5b4b878f70db",
          from_name: "Connected Circles Podcast Topic Suggestion",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Topic suggestion received!",
          description: `Thank you for suggesting: "${sanitizedTopic}". We'll consider it for future episodes!`,
        });

        setTopicSuggestion("");

        // Generate a new CSRF token after successful submission
        const newToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCsrfToken(newToken);
        sessionStorage.setItem("topic_suggestion_csrf_token", newToken);
      } else {
        throw new Error(result.message || "Failed to submit topic suggestion");
      }
    } catch (error) {
      console.error("Error submitting topic suggestion:", error);
      toast({
        title: "Error submitting suggestion",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 bg-gradient-to-b from-dark-bg via-medium-purple/5 to-dark-bg relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
            </div>
            <p className="text-gray-300">Loading episodes...</p>
          </div>
        </div>
      </div>
    );
  }

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
              All
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                {" "}
                Episodes
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Dive into our collection of transformative conversations about
            personal growth, authentic connection, and building meaningful
            communities.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>
            <div className="bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-6 border border-electric-blue/20 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <i className="fas fa-search text-electric-blue"></i>
                <span>Search Episodes</span>
              </h3>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by title, topic, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm"
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-gray-400 text-sm mt-2">
                  Found {filteredEpisodes.length} episode
                  {filteredEpisodes.length !== 1 ? "s" : ""} matching "
                  {searchQuery}"
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Episode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allEpisodes.length === 0 ? (
            // No episodes available from API
            <div className="col-span-3 text-center py-16">
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
          ) : filteredEpisodes.length > 0 ? (
            // Episodes available and match search
            filteredEpisodes.map((episode, index) => (
              <div key={episode.id} className="group">
                {/* Episode Card with circular motifs */}
                <div className="relative">
                  {/* Circular accent for each card */}
                  <div
                    className={`absolute -top-2 -left-2 w-6 h-6 rounded-full opacity-70 ${
                      index % 3 === 0
                        ? "bg-gradient-to-br from-electric-blue to-vibrant-green"
                        : index % 3 === 1
                        ? "bg-gradient-to-br from-vibrant-green to-rich-violet"
                        : "bg-gradient-to-br from-rich-violet to-medium-purple"
                    }`}
                  ></div>
                  <EpisodeCard episode={episode} />
                </div>
              </div>
            ))
          ) : (
            // Episodes available but no search matches
            <div className="col-span-3 text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 flex items-center justify-center">
                <i className="fas fa-search text-electric-blue text-xl"></i>
              </div>
              <p className="text-gray-400 text-lg mb-2">
                No episodes found for "{searchQuery}"
              </p>
              <p className="text-gray-500 text-sm">
                Try searching with different keywords or browse all episodes
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-electric-blue hover:text-vibrant-green transition-colors font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Suggest a Topic Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple opacity-70"></div>
            <div className="bg-gradient-to-br from-electric-blue/10 via-vibrant-green/5 to-rich-violet/10 p-8 rounded-2xl border border-electric-blue/20 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="relative mb-4">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-vibrant-green to-electric-blue opacity-70"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Suggest a
                    <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                      {" "}
                      Topic
                    </span>
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Have an idea for a conversation about personal growth,
                  connection, or community building? We'd love to explore it
                  together in a future episode.
                </p>
              </div>

              <form
                onSubmit={handleTopicSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
              >
                <div className="flex-grow relative">
                  <Input
                    type="text"
                    placeholder="Share your topic idea..."
                    value={topicSuggestion}
                    onChange={(e) => setTopicSuggestion(e.target.value)}
                    className="w-full p-4 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm"
                  />
                </div>
                <PrimaryButton
                  type="submit"
                  className="px-8 py-4 whitespace-nowrap"
                  disabled={!topicSuggestion.trim() || isSubmitting}
                >
                  <div className="flex items-center space-x-2">
                    <span>
                      {isSubmitting ? "Submitting..." : "Submit Idea"}
                    </span>
                    <i
                      className={
                        isSubmitting
                          ? "fas fa-spinner fa-spin"
                          : "fas fa-lightbulb"
                      }
                    ></i>
                  </div>
                </PrimaryButton>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Your suggestions help shape our conversations and build our
                  community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
