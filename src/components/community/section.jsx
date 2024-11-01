import { motion } from "framer-motion";
import React from "react";
import { communityData } from "../../constants";
import Community from ".";

const CommunitySection = () => {
  return (
    <div>
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
    </div>
  );
};

export default CommunitySection;
