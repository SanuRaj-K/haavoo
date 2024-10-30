import { motion } from "framer-motion";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen font-openSans w-full flex justify-center items-center">
      <div>
        <h1 className=" text-[30px] font-semibold">HAAWOO</h1>
        <div className="flex w-full justify-center mt-3 items-center">
          <motion.div
            className="size-2 bg-[#7C4995] rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
            className="size-2 bg-[#7C4995] rounded-full  mx-2"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="size-2 bg-[#7C4995] rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.4,
            }}
          />
          <motion.div
            className="size-2 bg-[#7C4995]  ml-2 rounded-full "
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.6,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
