import HeroSection from "@/components/home/HeroSection";
import FeaturedEpisodes from "@/components/home/FeaturedEpisodes";
import JoinTheCircleSection from "@/components/home/NewsletterSection";
import MissionSection from "@/components/about/MissionSection";
import HostQuoteSection from "@/components/home/HostQuoteSection";
import HostsSection from "@/components/about/HostsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedEpisodes />
      <MissionSection />
      <HostQuoteSection />
      <HostsSection />
      <JoinTheCircleSection />
    </>
  );
};

export default Home;
