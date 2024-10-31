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
import { motion } from "framer-motion";
import Review from "../../components/review";
import Community from "../../components/community";
import Footer from "../../components/footer";

const HomePage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setSliderIndex((prev) => (prev + 1) % sliderData.length);
        setFade(true); // Fade back in after updating the index
      }, 1000); // Fade-out duration (500ms)
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  const currentSlide = sliderData[sliderIndex];
  const scrollAmount = 300; // Adjust the scroll amount as needed

  const listRef = React.useRef(null);
  const reviewArr = [1, 2, 3];

  return (
    <div>
      <section
        className="h-screen w-full relative overflow-hidden"
        style={{ backgroundColor: currentSlide.backgroud }}
      >
        <div className="relative mt-10 font-openSans p-3">
      <div className="flex justify-center items-center h-screen">
            <h1
              className={`text-[200px] capitalize font-semibold text-white transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentSlide.title}
            </h1>
          </div>
          <div
            className={`z-20 absolute top-0 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={currentSlide.fruitImage} alt={`fruit-image`} />
          </div>
          <div
            className={`z-20 absolute top-1/2 flex flex-col items-center left-1/2 transform transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={currentSlide.cupImage} alt="cup-image" />
            <div className="px-8 py-1 hover:bg-black transition-all duration-100 mt-12 border-[1px] cursor-pointer border-white rounded-md inline-block text-white text-[20px]">
              <div>Order Now</div>
            </div>
          </div>
      </div>

        <div className=" w-full p-5 flex justify-between items-center absolute top-0">
          <div className=" cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul className="   flex justify-between items-center">
              <li className="text-[18px] cursor-pointer">Our Juices</li>
              <li className=" text-[18px]  cursor-pointer mx-5">Become Our Member</li>
              <li className=" size-8 cursor-pointer">
                <img className=" size-8" src={cart} alt="cart" />
              </li>
              <li className="  cursor-pointer ml-5">
                <img src={menu} alt="menu" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        {/* <ul className=" flex justify-evenly bg-[#dcd7d7] py-20 overflow-x-auto ">
          {flavoursMenu?.map((item, index) => (
            <li className=" mx-10" key={index}>
              <FlavoursComp  image={item.image} title={item.title} desc={item.desc}  />
            </li>
          ))}
        </ul> */}
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
      <section className=" my-20">
        <div>
          <h1 className=" text-[32px] font-semibold text-center">
            Rating and Reviews
          </h1>
        </div>
        <ul className=" mt-5 grid grid-cols-3 my-10 place-items-center ">
          {reviewArr?.map((item, index) => (
            <li>
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
      <section className=" py-20">
        <div>
          <div>
            <h1 className=" font-openSans text-[24px]   md:text-[32px] font-semibold  text-center">
              Instagram Community
            </h1>
          </div>
          <div>
            <ul className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  place-items-center   mt-10">
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
