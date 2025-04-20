import { Link } from 'wouter';
import { RustButton, OutlineButton } from '@/components/ui/button-variants';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-[#333333] bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-4">Nurturing the heart of your household</h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-['Source_Sans_Pro'] font-light">Honest conversations about parenting, partnerships, and building a strong family from the inside out.</p>
          <div className="flex flex-wrap gap-4">
            <RustButton asChild>
              <a href="https://podcasters.spotify.com/pod/show" target="_blank" rel="noopener noreferrer">Listen Now</a>
            </RustButton>
            <OutlineButton asChild>
              <Link href="/episodes">Explore Episodes</Link>
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
