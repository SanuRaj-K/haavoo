import React from "react";
import star from "../../assets/icons/review/star.svg";
import person from "../../assets/images/review/person.svg";

const Review = () => {
  return (
    <div className=" bg-[#FAFAFA] font-openSans  rounded-sm w-[360px] p-2">
      <div>
        <img src={star} alt="star" />
        <span className=" text-[12px]">10th Nov 2024</span>
      </div>
      <div>
        <p className=" text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <img src={person} alt="person" />
        <div>
          <span className=" text-[16px] font-bold">Ribin Siddique</span>
          <span className=" text-[12px]">Kerala, India</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
