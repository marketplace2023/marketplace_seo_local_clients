import FeaturedSection from "@/components/home/featured-sections";
import GlobalSection from "@/components/home/global-section";
import ServicesSection from "@/components/home/services-section";
import Navbar from "@/components/layout/navbar";

const Page = () => {
  return (
    <div className="container">
      <Navbar />
      <FeaturedSection />
      <GlobalSection />
      <ServicesSection />
    </div>
  );
};

export default Page;
