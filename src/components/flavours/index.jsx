 import React from "react";

const FlavoursComp = ({ image, title, desc }) => {
  return (
    <div>
      <div className=" flex flex-col    items-center    w-[400px]">
        <h1 className=" text-[36px] font-oleo">{title}</h1>
        <div
          
          className=" group flex flex-col cursor-pointer  items-center"
        >
          {" "}
          <img
            className=" group-hover:scale-105  transition-all duration-500 w-[220px] h-[190px] p-5 my-5"
            src={image}
            alt={title}
          />
          <p className="  w-[300px]  md:w-full text-center text-[#474747] text-[16px] font-openSans">
            {desc}
          </p>
          <div className="px-4 py-1 mt-3  transition-all duration-100  hover:bg-[#7C4995]   hover:text-white  border-[1px] cursor-pointer border-black rounded-md inline-block text-black text-[16px]">
            <div>Order Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavoursComp;
