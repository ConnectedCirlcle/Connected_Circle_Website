import { useState, useEffect } from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { DOMPurify } from "@/lib/dom-purify";

const JoinTheCircleSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  // Generate a CSRF token when the component mounts
  useEffect(() => {
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);

    // Store the token in sessionStorage for verification
    sessionStorage.setItem("newsletter_csrf_token", token);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Verify CSRF token
    const storedToken = sessionStorage.getItem("newsletter_csrf_token");
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
      // Sanitize the email
      const sanitizedEmail = DOMPurify.sanitize(email.trim().toLowerCase());

      // Submit directly to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: sanitizedEmail,
          csrfToken: csrfToken,
          // Add Web3Forms access key directly
          access_key: "91706b95-f8a1-4d6d-b44f-5b4b878f70db",
          from_name: "Connected Circles Podcast Newsletter Subscription",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Welcome to the Circle!",
          description: "You'll receive our newsletter at " + sanitizedEmail,
        });

        setEmail("");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);

        // Generate a new CSRF token after successful submission
        const newToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCsrfToken(newToken);
        sessionStorage.setItem("newsletter_csrf_token", newToken);
      } else {
        throw new Error(result.message || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Error subscribing",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-bg via-medium-purple/10 to-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue/20 to-vibrant-green/20 blur-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-rich-violet/20 to-medium-purple/20 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-vibrant-green/10 to-electric-blue/10 blur-xl animate-pulse delay-2000"></div>

        {/* Connecting lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-vibrant-green/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with circular accent */}
          <div className="relative mb-8">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-30 blur-sm"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-electric-blue to-vibrant-green bg-clip-text text-transparent">
                Join the Circle
              </span>
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
              Become part of a community dedicated to meaningful growth,
              authentic connection, and transformative conversations. Your
              journey starts here.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">🎧</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rich-violet opacity-80"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Early Access
              </h3>
              <p className="text-gray-800 text-sm">
                Get new episodes before anyone else and exclusive
                behind-the-scenes content.
              </p>
            </div>

            <div className="group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">💬</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-electric-blue opacity-80"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Community Access
              </h3>
              <p className="text-gray-800 text-sm">
                Connect with like-minded individuals in our private community
                space.
              </p>
            </div>

            <div className="group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-vibrant-green opacity-80"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Growth Resources
              </h3>
              <p className="text-gray-800 text-sm">
                Receive curated resources, reflection prompts, and growth
                challenges.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email to join"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-white/10 border border-electric-blue/30 rounded-full text-white placeholder-gray-700 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm"
                    required
                  />
                </div>
                <PrimaryButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join the Circle"}
                </PrimaryButton>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-vibrant-green to-electric-blue flex items-center justify-center mb-4 animate-pulse">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-vibrant-green mb-2">
                  Welcome to the Circle!
                </h3>
                <p className="text-gray-800">
                  Check your email for a special welcome message.
                </p>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-electric-blue/20">
            <p className="text-black text-sm mb-4">
              Join thousands of others on their growth journey
            </p>
            <div className="flex justify-center space-x-8">
              <SecondaryButton asChild>
                <a
                  href="https://podcasters.spotify.com/pod/show"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  🎵 Spotify
                </a>
              </SecondaryButton>
              <SecondaryButton asChild>
                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  🍎 Apple Podcasts
                </a>
              </SecondaryButton>
              <SecondaryButton asChild>
                <a
                  href="https://podcasts.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  🎙️ Google Podcasts
                </a>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheCircleSection;
