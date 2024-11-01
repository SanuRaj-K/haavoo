import React, { useEffect, useState } from "react";
import { communityData, sliderData } from "../../constants";
import { motion } from "framer-motion";
import Community from "../../components/community";
import Footer from "../../components/footer";
import Header from "../../components/header.jsx";
import ReviewSection from "../../components/review/section.jsx";
import FlavoursSection from "../../components/flavours/section.jsx";

const HomePage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setSliderIndex((prev) => (prev + 1) % sliderData.length);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  const currentSlide = sliderData[sliderIndex];

  return (
    <div>
      <div className="  w-full fixed top-0 ">
        <section
          className=" h-[500px] md:h-[800px]    w-full relative overflow-hidden"
          style={{ backgroundColor: currentSlide.backgroud }}
        >
          <div className="relative mt-10 font-openSans p-3">
            <div className="flex justify-center items-center h-[500px] md:h-[800px]  ">
              <motion.h1
                key={currentSlide.title}
                initial={{ opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={` text-[50px] sm:text-[100px] md:text-[150px] lg:text-[200px] capitalize font-semibold text-white transition-opacity duration-500  
               }`}
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
              className={`z-20 absolute lg:top-[40px] top-[100px] md:top-[200px] transition-opacity duration-500 
             `}
            >
              <img src={currentSlide.fruitImage} alt={`fruit-image`} />
            </motion.div>
            <div
              className={`z-20 absolute top-1/2 flex w-[100px] md:w-[200px] flex-col items-center left-1/2 transform transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 
             `}
            >
              {/* Cup Image Animation */}
              <motion.img
                key={currentSlide.cupImage}
                src={currentSlide.cupImage}
                alt="cup-image"
                initial={{ x: "100%", opacity: 0 }} // New cup enters from right
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }} // Old cup exits to left
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              {/* Order Now Button */}
              <div className="md:px-2 px-3  text-center w-[110px]  md:w-full py-1 hover:bg-[#7C4995] hover:border-black transition-all duration-100 mt-12 border-[1px] cursor-pointer border-white rounded-md inline-block text-white text-[16px] md:text-[20px]">
                <div>Order Now</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className=" bg-white  mt-[500px] sm:mt-[500px] md:mt-[800px]  w-full relative  z-10">
        {/* flavours section */}
        <section>
          <FlavoursSection />
        </section>
        {/*  Review Section*/}
        <section className=" my-10 md:my-20">
          <ReviewSection />
        </section>
        <section className=" my-10 px-3 md:my-20">
          <div>
            <div>
              <h1 className=" font-openSans text-[24px]   md:text-[32px] font-semibold  text-center">
                Instagram Community
              </h1>
            </div>
            <div>
              <motion.ul
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:px-5 gap-5  place-items-center   mt-10"
              >
                {communityData?.map((item, index) => (
                  <li className=" mx-5" key={index}>
                    <Community image={item.image} />
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
        <section className=" w-full     shadow-lg  fixed top-0 z-50 bg-white">
          <Header />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
