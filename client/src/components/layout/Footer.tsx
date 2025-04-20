import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive"
      });
      return;
    }
    
    // Would normally submit to an API
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter at " + email
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-white text-2xl font-['Playfair_Display'] font-bold">Heart</span>
              <span className="text-white text-2xl mx-1">&</span>
              <span className="text-white text-2xl font-['Playfair_Display'] font-bold">Household</span>
            </Link>
            <p className="text-gray-400 mb-4">Nurturing the emotional, practical, and relational well-being of families through honest conversations.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/episodes" className="text-gray-400 hover:text-white transition">Episodes</Link></li>
              <li><Link href="/topics" className="text-gray-400 hover:text-white transition">Topics</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-white transition">Community</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest episodes and family resources.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white rounded-r-none focus:outline-none flex-grow border-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-[#B2593C] hover:bg-opacity-90 text-white p-2 rounded-l-none transition"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Heart & Household. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">Made with ❤️ by Heart & Household</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
