import HeroSection from '@/components/home/HeroSection';
import FeaturedEpisodes from '@/components/home/FeaturedEpisodes';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import MissionSection from '@/components/about/MissionSection';
import HostsSection from '@/components/about/HostsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedEpisodes />
      <TestimonialSection />
      <MissionSection />
      <HostsSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
