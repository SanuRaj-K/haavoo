import { motion } from "framer-motion";
import React, { useRef } from "react";
import Review from ".";
import { reviewsData } from "../../constants";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ReviewSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div>
        <h1 className="text-[24px] md:text-[32px] font-semibold text-center">
          Rating and Reviews
        </h1>
      </div>
      <div className=" my-10 md:my-0">
        {/* Arrow on the left */}
        <motion.div
          initial={{ y: "200px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          className="cursor-pointer p-1 border-2 hover:border-[#7C4995] border-black rounded-full flex items-center absolute left-0 md:top-[200px] z-10"
          onClick={() => scroll("left")}
          style={{ marginLeft: "10px" }} // Adjust spacing as needed
        >
          <ArrowBackIosNewIcon />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          ref={scrollRef} // Attach ref to the ul for scrolling
          className="flex md:max-w-[1200px]   scroll-bar justify-between mx-auto space-x-5 overflow-x-auto scrollbar-hide py-10"
        >
          {reviewsData?.map((item, index) => (
            <li
              key={index}
              className="w-[250px] md:w-fit mx-10 flex-shrink-0 my-5"
            >
              <Review name={item.name} />
            </li>
          ))}
        </motion.ul>

        {/* Arrow on the right */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          className="cursor-pointer p-1 border-2 hover:border-[#7C4995] border-black rounded-full flex items-center absolute  right-0  md:top-[200px] z-10"
          onClick={() => scroll("right")}
          style={{ marginRight: "10px" }} // Adjust spacing as needed
        >
          <ArrowForwardIosIcon />
        </motion.div>
      </div>

      <div className="my-5 flex justify-center items-center">
        <div className="px-4 py-1 mt-3 hover:bg-[#7C4995] hover:text-white transition-all duration-300 border-[1px] cursor-pointer border-black rounded-md inline-block text-black text-[18px]">
          <div>Write a Review</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
