import React, { useEffect, useState } from "react";
import { sliderData } from "../../constants";
import { motion } from "framer-motion";
import Footer from "../../components/footer";
import Header from "../../components/header.jsx";
import ReviewSection from "../../components/review/section.jsx";
import FlavoursSection from "../../components/flavours/section.jsx";
import CommunitySection from "../../components/community/section.jsx";

const HomePage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [headerColor, setHeaderColor] = useState("transparent");
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setSliderIndex((prev) => (prev + 1) % sliderData.length);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth < 768 ? 400 : 800;
    if (window.scrollY >= scrollThreshold) {
      setHeaderColor("white");
      setShadow(true);
    } else {
      setHeaderColor("transparent");
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSlide = sliderData[sliderIndex];

  return (
    <div>
      <div className="w-full fixed top-0">
        <motion.section
          key={currentSlide.backgroud}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[500px] md:h-[800px] w-full relative overflow-hidden"
          style={{ backgroundColor: currentSlide.backgroud }}
        >
          {/* Your Slider Content */}
        </motion.section>
      </div>

      {/* Header with Dynamic Background Color */}
      <section
        className={`${shadow && 'shadow-lg'} w-full fixed top-0  z-50`}
        style={{ backgroundColor: headerColor }}
      >
        <Header />
      </section>

      <div className="bg-white mt-[500px] sm:mt-[500px] md:mt-[800px] w-full relative z-10">
         <FlavoursSection />
        <ReviewSection />
        <CommunitySection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
