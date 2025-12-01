import React from "react";
import Marquee from "react-fast-marquee";
import TopTrainer from "./TopTrainer";
import useLoadMyData from "../Utilities/useLoadMyData";

const Trainers = () => {
  const { TchDatas, Loading, Error } = useLoadMyData(
    "../../public/TeachersData.json"
  );
  return (
    <div>
      <h1 className="text-3xl font-bold ">Our Trainer</h1>
      <Marquee>
        <div className="flex gap-50 items-center">
          {TchDatas.map((TrainerData) => (
            <TopTrainer
              key={TrainerData.providerName}
              TrainerData={TrainerData}
            ></TopTrainer>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Trainers;
