import React from "react";
import fssai from "../../assets/icons/social-media/fssai.svg";
import { socialMedia } from "../../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" px-10">
      <div className=" h-[1px]  w-full bg-black"></div>{" "}
      <div className=" py-10 text-[12px] md:text-[16px] flex  flex-col  lg:flex-row items-center justify-between">
        <div>
          <ul className=" flex  flex-col sm:flex-row  font-medium sm:items-center">
            <li className="  hover:underline cursor-pointer  flex flex-col sm:flex-row   sm:items-center">
              <span>Manufactured & Packed By: More Orgo Private Limited</span>
              <img className="  size-10 cursor-pointer" src={fssai} alt="" />
              <span className=" hidden xl:block ml-5">|</span>
            </li>
            <li className="  md:ml-10 mt-1 md:mt0 sm:mx-3 hover:underline flex items-center  cursor-pointer">
              Privacy Policy
              <span className="  hidden xl:block ml-5">|</span>
            </li>
            <li className="  flex items-center  mt-1 md:mt0 md:ml-10 hover:underline cursor-pointer">
              Terms and Conditions
              <span className="  hidden xl:block ml-5">|</span>
            </li>
            <li className="  mt-1 md:mt0 sm:ml-3  md:ml-10 hover:underline cursor-pointer">
              Products
            </li>
          </ul>
        </div>
        <div>
          <ul className=" mt-8 lg:mt-0 flex items-center justify-between">
            {socialMedia?.map((item, index) => (
              <li key={index}>
                <motion.div  transition={{duration:.3}} whileHover={{ y: -5 }}>
                  <img
                    className=" cursor-pointer mx-5"
                    src={item.icon}
                    alt="icon"
                  />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
