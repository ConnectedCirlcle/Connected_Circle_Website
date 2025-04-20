import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { RustButton } from '@/components/ui/button-variants';

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Episodes', path: '/episodes' },
    { name: 'Topics', path: '/topics' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#F8F1E6] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-[#B2593C] text-3xl font-['Playfair_Display'] font-bold">Heart</span>
              <span className="text-[#B2593C] text-3xl mx-1">&</span>
              <span className="text-[#858461] text-3xl font-['Playfair_Display'] font-bold">Household</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`text-[#333333] hover:text-[#B2593C] font-['Source_Sans_Pro'] font-semibold transition ${
                  location === item.path ? 'text-[#B2593C]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <RustButton asChild>
              <a href="https://podcasters.spotify.com/pod/show" target="_blank" rel="noopener noreferrer">Listen Now</a>
            </RustButton>
          </nav>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-[#333333]">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[#333333] hover:text-[#B2593C] font-['Source_Sans_Pro'] font-semibold py-2 transition ${
                  location === item.path ? 'text-[#B2593C]' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <RustButton asChild className="w-full justify-center">
              <a href="https://podcasters.spotify.com/pod/show" target="_blank" rel="noopener noreferrer">Listen Now</a>
            </RustButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
