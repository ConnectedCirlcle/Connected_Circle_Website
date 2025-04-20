import { Link } from 'wouter';

const ConnectSection = () => {
  return (
    <div className="bg-[#F8F1E6] p-8 rounded-xl">
      <h3 className="font-['Playfair_Display'] font-bold text-2xl mb-6">Connect With Us</h3>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-white p-3 rounded-full mr-4">
            <i className="fas fa-envelope text-[#B2593C]"></i>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email Us</h4>
            <a href="mailto:hello@heartandhousehold.com" className="text-[#B2593C] hover:underline">
              hello@heartandhousehold.com
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-full transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-full transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-full transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-full transition-colors">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Listen On</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-lg flex items-center justify-center transition-colors">
              <i className="fab fa-spotify mr-2"></i>
              <span>Spotify</span>
            </a>
            <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-lg flex items-center justify-center transition-colors">
              <i className="fab fa-apple mr-2"></i>
              <span>Apple</span>
            </a>
            <a href="https://podcasts.google.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-lg flex items-center justify-center transition-colors">
              <i className="fab fa-google mr-2"></i>
              <span>Google</span>
            </a>
            <a href="https://www.stitcher.com" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-lg flex items-center justify-center transition-colors">
              <i className="fas fa-podcast mr-2"></i>
              <span>Stitcher</span>
            </a>
            <a href="/rss" className="bg-white hover:bg-[#B2593C] text-[#B2593C] hover:text-white p-3 rounded-lg flex items-center justify-center transition-colors col-span-1 sm:col-span-2">
              <i className="fas fa-rss mr-2"></i>
              <span>RSS Feed</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
