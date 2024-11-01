import { motion } from "framer-motion";
import React from "react";
import { cart, logo, menu } from "../../constants";

const Header = () => {
  return (
    <div>
      <div className="   w-full p-5 flex justify-between items-center z-50 relative">
        <div className=" cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="    flex justify-between items-center">
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className=" hidden sm:block   text-[18px]   cursor-pointer"
            >
              Our Juices
            </motion.li>
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className=" text-[18px] hidden sm:block     cursor-pointer mx-5"
            >
              Become Our Member
            </motion.li>
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className=" size-5 md:size-8 cursor-pointer"
            >
              <img className=" size-5 md:size-8" src={cart} alt="cart" />
            </motion.li>
            <motion.li
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="  size-5 md:size-8 cursor-pointer ml-5"
            >
              <img src={menu} alt="menu" />
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
