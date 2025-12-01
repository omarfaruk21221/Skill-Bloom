import React from "react";
import Marquee from "react-fast-marquee";
import TopTrainer from "./TopTrainer";
import useLoadMyData from "../Utilities/useLoadMyData";
import LoadingSpine from "./Loading/LoadingSpine";

const Trainers = () => {
  const { TchDatas, Loading, Error } = useLoadMyData(
    "../../public/TeachersData.json"
  );
  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error} </p>;
  return (
    <div>
      <h1 className="text-3xl font-bold ">Our Trainer</h1>
      <Marquee>
        <div className="flex gap-40 items-center py-5">
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
