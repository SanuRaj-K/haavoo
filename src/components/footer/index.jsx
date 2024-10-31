import React from "react";
import fssai from "../../assets/icons/social-media/fssai.svg";
import { socialMedia } from "../../constants";

const Footer = () => {
  return (
    <div className=" px-10">
      <div className=" h-[1px] w-full bg-black"></div>{" "}
      <div className=" py-10 flex items-center justify-between">
        <div>
          <ul className=" flex font-medium items-center">
            <li className="   flex items-center">
              <span>Manufactured & Packed By: More Orgo Private Limited</span>
              <img className="  cursor-pointer" src={fssai} alt="" />
              <span className=" ml-5">|</span>
            </li>
            <li className=" ml-10 hover:underline  cursor-pointer">
              Privacy Policy
              <span className=" ml-5">|</span>
            </li>
            <li className=" ml-10 hover:underline cursor-pointer">
              Terms and Conditions
              <span className=" ml-5">|</span>
            </li>
            <li className=" ml-10 hover:underline cursor-pointer">Products</li>
          </ul>
        </div>
        <div>
          <ul className=" flex items-center justify-between">
            {socialMedia?.map((item, index) => (
              <li key={index}>
                <img
                  className=" cursor-pointer mx-5"
                  src={item.icon}
                  alt="icon"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
