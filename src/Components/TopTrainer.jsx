import React from "react";
import trainer from "../assets/user.png";

const TopTrainer = ({ TrainerData }) => {
  const{
    id,
    providerName,
    image
  }=TrainerData
  console.log(TrainerData)
  return (
    <div className=" text-center">
      <figure className="mx-auto">
        <img
          className=" w-50 h-50 rounded-full object-cover p-2 border border-base-200  "
          src={image}
          alt={providerName}
        />
      </figure>
      <p className="text-xl font-semibold">{providerName}</p>
    </div>
  );
};

export default TopTrainer;
