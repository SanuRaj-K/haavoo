import React, { useEffect, useState } from "react";
import { cart, logo, menu, sliderData } from "../../constants";
import FlavoursComp from "../../components/flavours";


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

  return (
    <div>
      {/* <section
        className="h-screen w-full relative overflow-hidden"
        style={{ backgroundColor: currentSlide.backgroud }}
      >
        <div className="relative mt-10 font-openSans p-3"> */}
          {/* <div className="flex justify-center items-center h-screen">
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
          </div> */}
        {/* </div>

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
      </section> */}
      <section>
        <FlavoursComp/>
      </section>
    </div>
  );
};

export default HomePage;
