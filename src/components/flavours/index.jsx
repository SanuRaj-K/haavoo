import React from "react";

const FlavoursComp = ({ image, title, desc }) => {
  return (
    <div>
      <div className=" flex flex-col items-center  w-[400px]">
        <h1 className=" text-[36px] font-oleo">{title}</h1>
        <div className=" flex flex-col items-center">
          {" "}
          <img className=" w-[220px] h-[190px] p-5 my-5" src={image} alt={title} />
          <p className="  text-center text-[#474747] text-[16px] font-openSans">
            {desc}
          </p>
          <div className="px-4 py-1 mt-3  transition-all duration-100   border-[1px] cursor-pointer border-black rounded-md inline-block text-black text-[16px]">
            <div>Order Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavoursComp;
