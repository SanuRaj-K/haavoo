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
          <div className="relative mt-10 font-openSans p-3">
            <div className="flex justify-center items-center h-[500px] md:h-[800px]">
              <motion.h1
                key={currentSlide.title}
                initial={{ opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="text-[50px] sm:text-[100px] md:text-[150px] lg:text-[200px] capitalize font-semibold text-white"
              >
                {currentSlide.title}
              </motion.h1>
            </div>
            <motion.div
              key={currentSlide.fruitImage}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="z-20 absolute lg:top-[40px] top-[100px] md:top-[200px]"
            >
              <img src={currentSlide.fruitImage} alt="fruit-image" />
            </motion.div>
            <div className="z-20 absolute top-1/2 flex w-[100px] md:w-[200px] flex-col items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.img
                key={currentSlide.cupImage}
                src={currentSlide.cupImage}
                alt="cup-image"
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <div className="md:px-2 px-3 text-center w-[110px] md:w-full py-1 hover:bg-[#7C4995] hover:border-black transition-all duration-100 mt-12 border-[1px] cursor-pointer border-white rounded-md text-white text-[16px] md:text-[20px]">
                <div>Order Now</div>
              </div>
            </div>
          </div>{" "}
        </motion.section>
      </div>

      {/* Header with Dynamic Background Color */}
      <section
        className={`${shadow && "shadow-lg"} w-full fixed top-0  z-50`}
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
