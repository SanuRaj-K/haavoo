import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

const Community = ({ image }) => {
  return (
    <div>
      <div className="group relative w-[250px] cursor-pointer h-[360px] rounded-md">
        <motion.div
          className="hidden group-hover:flex bg-black/50 rounded-md justify-center items-center absolute inset-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.1 }}
        >
          <InstagramIcon style={{ width: '60px', height: '60px', color: 'white' }} />
        </motion.div>
        <img src={image} alt="pic" className="rounded-md" />
      </div>
    </div>
  );
};

export default Community;
