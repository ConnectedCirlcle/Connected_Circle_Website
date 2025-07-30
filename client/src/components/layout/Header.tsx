import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { PrimaryButton } from "@/components/ui/button-variants";

// Function to scroll to top when navigating
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Episodes", path: "/episodes" },
    { name: "YouTube", path: "/topics" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-dark-bg sticky top-0 z-50 shadow-lg border-b border-electric-blue/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Logo */}
              <div className="relative">
                <img
                  src="/Logo_icon.png"
                  alt="Connected Circles Logo"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-bold tracking-tight">
                  Connected
                </span>
                <span className="text-electric-blue text-xl font-medium -mt-1">
                  Circles
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={scrollToTop}
                className={`text-white hover:text-electric-blue font-medium transition-all duration-300 relative group ${
                  location === item.path ? "text-vibrant-green" : ""
                }`}
              >
                {item.name}
                {location === item.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-vibrant-green to-electric-blue rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-vibrant-green rounded-full transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
            <PrimaryButton asChild>
              <Link href="/community" onClick={scrollToTop}>
                Join the Circle
              </Link>
            </PrimaryButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-electric-blue transition-colors duration-300 p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-white hover:text-electric-blue font-medium py-2 transition-all duration-300 relative ${
                  location === item.path ? "text-vibrant-green" : ""
                }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToTop();
                }}
              >
                {item.name}
                {location === item.path && (
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-vibrant-green to-electric-blue rounded-r-full"></div>
                )}
              </Link>
            ))}
            <PrimaryButton asChild className="w-full justify-center mt-4">
              <Link
                href="/community"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToTop();
                }}
              >
                Join the Circle
              </Link>
            </PrimaryButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
