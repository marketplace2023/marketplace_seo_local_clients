import Image from "next/image";
import { Button } from "../ui/button";
import logo from "@/public/assets/illustration.png";

const FeaturedSection = () => {
  return (
    <div className="flex border-2 border-gray-200 p-8">
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold">
          Navigating the digital landscape for success
        </h1>
        <p className="text-base mt-4">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div className="flex gap-4 mt-4">
          <Button className="bg-black text-white px-6 py-2">Explorer</Button>
          <Button className="bg-white border-2 border-black text-black px-6 py-2">
            More
          </Button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image src={logo} width={300} height={300} alt="Company logo" />
      </div>
    </div>
  );
};

export default FeaturedSection;
