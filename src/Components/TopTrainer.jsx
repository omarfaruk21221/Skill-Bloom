import React from "react";
import trainer from "../assets/user.png";

const TopTrainer = ({ TrainerData }) => {
  return (
    <div className="w-8/12 mx-auto my-10 p-4 space-y-2 col-span-12 md:col-span-6 lg:col-span-3 text-center">
      <figure className="mx-auto">
        <img
          className=" object-cover p-2 border border-base-200 rounded-full "
          src={trainer}
          alt={TrainerData.providerName}
        />
      </figure>
      <p className="text-xl font-semibold">{TrainerData.providerName}</p>
    </div>
  );
};

export default TopTrainer;
