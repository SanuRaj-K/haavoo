import React, { useRef } from "react";
import { flavoursMenu } from "../../constants";
import FlavoursComp from ".";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const FlavoursSection = () => {
    const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="relative flex items-center">
        <motion.ul
          ref={scrollRef}
          className="  flex   scroll-bar  items-center justify-center sm:justify-start bg-[#F8F8F8] py-20  md:space-x-10   overflow-x-auto scrollbar-hide  "
        >
          {flavoursMenu?.map((item, index) => (
            <li className=" " key={index}>
              <FlavoursComp
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            </li>
          ))}
        </motion.ul>

        <div
          className="cursor-pointer  mr-3 p-1 border-2 hover:border-[#7C4995] border-black rounded-full flex items-center absolute right-0 z-10"
          onClick={() => scroll("right")}
        >
          <ArrowForwardIosIcon className=" size-2" />
        </div>
        <div
          className="cursor-pointer ml-3  p-1 border-2 hover:border-[#7C4995] border-black rounded-full flex items-center  absolute left-0 z-10"
          onClick={() => scroll("left")}
        >
          <ArrowBackIosNewIcon />
        </div>
      </div>
    </div>
  );
};

export default FlavoursSection;
