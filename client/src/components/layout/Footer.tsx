import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { PrimaryButton } from "@/components/ui/button-variants";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { DOMPurify } from "@/lib/dom-purify";

// Function to scroll to top when navigating
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  // Generate a CSRF token when the component mounts
  useEffect(() => {
    const token =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);

    // Store the token in sessionStorage for verification
    sessionStorage.setItem("footer_newsletter_csrf_token", token);
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
    const storedToken = sessionStorage.getItem("footer_newsletter_csrf_token");
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
          from_name: "Connected Circles Podcast Footer Newsletter Subscription",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Welcome to the Circle!",
          description: "You'll receive our newsletter at " + sanitizedEmail,
        });

        setEmail("");

        // Generate a new CSRF token after successful submission
        const newToken =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        setCsrfToken(newToken);
        sessionStorage.setItem("footer_newsletter_csrf_token", newToken);
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
    <footer className="bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue/10 to-vibrant-green/10 blur-lg animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-rich-violet/10 to-medium-purple/10 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-vibrant-green/5 to-electric-blue/5 blur-xl animate-pulse delay-2000"></div>

        {/* Connecting lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                {/* Logo */}
                <div className="relative">
                  <img
                    src="/Logo_icon.png"
                    alt="Connected Circles Logo"
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl font-bold tracking-tight">
                    Connected
                  </span>
                  <span className="text-electric-blue text-lg font-medium -mt-1">
                    Circles
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Where meaningful conversations spark personal growth and authentic
              connections. Join our community of seekers on a journey of
              transformation and discovery.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fab fa-spotify text-white text-sm"></i>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fab fa-apple text-white text-sm"></i>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rich-violet to-medium-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className="fab fa-google text-white text-sm"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="relative mb-6">
              <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-br from-electric-blue to-vibrant-green opacity-70"></div>
              <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-vibrant-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-vibrant-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/episodes"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-vibrant-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Episodes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/topics"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-vibrant-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>YouTube</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-vibrant-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Community</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-vibrant-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="relative mb-6">
              <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-br from-vibrant-green to-rich-violet opacity-70"></div>
              <h4 className="font-semibold text-lg text-white">
                Join the Circle
              </h4>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Stay connected with our latest episodes, growth resources, and
              community updates.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-full text-white placeholder-gray-400 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 backdrop-blur-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              {/* Hidden input for CSRF token */}
              <input type="hidden" name="csrf_token" value={csrfToken} />
              <PrimaryButton
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Circle"}
              </PrimaryButton>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-electric-blue/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Connected Circles. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                Terms of Use
              </Link>
              <Link
                href="/cookie-policy"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Connection visualization */}
          <div className="mt-8 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-r from-electric-blue to-vibrant-green"></div>
              <div className="w-2 h-2 rounded-full bg-vibrant-green animate-pulse delay-500"></div>
              <div className="w-12 h-px bg-gradient-to-r from-vibrant-green to-rich-violet"></div>
              <div className="w-2 h-2 rounded-full bg-rich-violet animate-pulse delay-1000"></div>
            </div>
            <p className="text-gray-400 text-sm">
              Made with 💙 by Connected Circles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
