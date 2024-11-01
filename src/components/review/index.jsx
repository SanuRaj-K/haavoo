import React from "react";
import star from "../../assets/icons/review/star.svg";
import person from "../../assets/images/review/person.svg";
import { motion } from "framer-motion";

const Review = ({ name }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className=" bg-[#FAFAFA] font-openSans md:h-[270px]  rounded-lg w-full md:w-[360px] p-5 shadow-xl"
    >
      <div className=" flex items-center justify-between">
        <img src={star} alt="star" />
        <span className=" text-[12px]">10th Nov 2024</span>
      </div>
      <div>
        <p className=" md:h-[160px] py-5 text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className=" flex  items-center">
        <img src={person} alt="person" />
        <div className=" flex flex-col ml-3">
          <span className=" text-[16px] font-bold">{name}</span>
          <span className=" text-[12px]">Kerala, India</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Review;
