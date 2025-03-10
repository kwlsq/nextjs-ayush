import Navbar from "@/components/Navbar";
import Ribbon from "./Ribbon";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen bg-[#c7d0d9] flex justify-center relative overflow-hidden whitespace-nowrap">
      <Navbar />
      <Image
        width={1000}
        height={1000}
        className="w-auto h-full pt-20"
        src="/photo.webp"
        alt="photo of the web owner"
      />
      <h1 className="absolute bottom-0 text-[#f4f7fa] text-[9.39875em] animate-marquee">
        Webflow Developer - UI/UX Designer
      </h1>
      <Ribbon />
    </div>
  );
};

export default HeroSection;
