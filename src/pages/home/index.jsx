import React, { useEffect, useState } from "react";
import {
  cart,
  communityData,
  flavoursMenu,
  logo,
  menu,
  sliderData,
} from "../../constants";
import FlavoursComp from "../../components/flavours";
import { AnimatePresence, motion } from "framer-motion";
import Review from "../../components/review";
import Community from "../../components/community";
import Footer from "../../components/footer";

const HomePage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setSliderIndex((prev) => (prev + 1) % sliderData.length);
      }, 1000); // Fade-out duration (500ms)
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  const currentSlide = sliderData[sliderIndex];

  const listRef = React.useRef(null);
  const reviewArr = [1, 2, 3];

  return (
    <div>
      <section
        className=" h-[500px] md:h-[800px]   w-full relative overflow-hidden"
        style={{ backgroundColor: currentSlide.backgroud }}
      >
        <div className="relative mt-10 font-openSans p-3">
          <div className="flex justify-center items-center h-[500px] md:h-[800px]  ">
            <h1
              className={` text-[50px] sm:text-[100px] md:text-[150px] lg:text-[200px] capitalize font-semibold text-white transition-opacity duration-500  
               }`}
            >
              {currentSlide.title}
            </h1>
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
            <div className="px-8 py-1 hover:bg-black transition-all duration-100 mt-12 border-[1px] cursor-pointer border-white rounded-md inline-block text-white text-[16px] md:text-[20px]">
              <div>Order Now</div>
            </div>
          </div>
        </div>

        <div className="   w-full p-5 flex justify-between items-center absolute top-0">
          <div className=" cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="    flex justify-between items-center">
              <li className=" hidden sm:block text-[18px]   cursor-pointer">
                Our Juices
              </li>
              <li className=" text-[18px] hidden sm:block    cursor-pointer mx-5">
                Become Our Member
              </li>
              <li className=" size-5 md:size-8 cursor-pointer">
                <img className=" size-5 md:size-8" src={cart} alt="cart" />
              </li>
              <li className="  size-5 md:size-8 cursor-pointer ml-5">
                <img src={menu} alt="menu" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex items-center">
          <motion.ul
            ref={listRef}
            className="flex justify-evenly bg-[#F8F8F8] py-20 space-x-10 overflow-x-auto scrollbar-hide"
          >
            {flavoursMenu?.map((item, index) => (
              <li className=" px-5" key={index}>
                <FlavoursComp
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
      <section className=" my-10 md:my-20">
        <div>
          <h1 className=" text-[24px] md:text-[32px] font-semibold text-center">
            Rating and Reviews
          </h1>
        </div>
        <ul className=" mt-5 px-5 sm:px-7  grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 my-10 place-items-center ">
          {reviewArr?.map((item, index) => (
            <li key={index} className=" my-5 ">
              <Review />
            </li>
          ))}
        </ul>
        <ul className=" flex my-10 items-center justify-center">
          {reviewArr?.map((item, index) => (
            <li
              className=" size-2 cursor-pointer rounded-full  mx-3 bg-[#8D8D8D]"
              key={index}
            >
              {" "}
            </li>
          ))}
        </ul>
        <div className=" my-5 flex justify-center items-center">
          <div className="px-4 py-1 mt-3  transition-all duration-100   border-[1px] cursor-pointer border-black rounded-md inline-block text-black text-[18px]">
            <div>Write a Review</div>
          </div>
        </div>
      </section>
      <section className=" my-10 md:my-20">
        <div>
          <div>
            <h1 className=" font-openSans text-[24px]   md:text-[32px] font-semibold  text-center">
              Instagram Community
            </h1>
          </div>
          <div>
            <ul className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:px-5 gap-5  place-items-center   mt-10">
              {communityData?.map((item, index) => (
                <li className=" mx-5" key={index}>
                  <Community image={item.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
