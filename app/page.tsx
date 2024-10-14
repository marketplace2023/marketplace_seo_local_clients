import BussinesSection from "@/components/home/bussines-section";
import FeaturedSection from "@/components/home/featured-sections";
import GlobalSection from "@/components/home/global-section";
import PropertiesSection from "@/components/home/properties-section";
import ServicesSection from "@/components/home/services-section";
import SteepsSection from "@/components/home/steeps-sections";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const Page = () => {
  return (
    <div className="container">
      <Navbar />
      <FeaturedSection />
      <GlobalSection />
      <ServicesSection />
      <SteepsSection />
      <BussinesSection />
      <PropertiesSection />
      <Footer />
    </div>
  );
};

export default Page;
