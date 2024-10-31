import React from "react";

const Community = ({ image }) => {
  return (
    <div>
      <div className=" w-[250px] h-[360px] rounded-md">
        <img src={image} alt="pic" />
      </div>
    </div>
  );
};

export default Community;
