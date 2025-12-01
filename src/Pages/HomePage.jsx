import { useEffect, useState } from "react";
import useLoadMyData from "../Utilities/useLoadMyData";
import HeroBannar from "../Components/Header/HeroBannar";
import SkillCard from "../Components/SkillCard";
import TopTrainer from "../Components/TopTrainer";
import HowWorkCards from "../Components/HowWorkCards";
import LoadingSpine from "../Components/Loading/LoadingSpine";
import Status from "../Components/Status";
import SwiperBannar from "../Components/Header/SwiperBannar";

const HomePage = () => {
  const { TchDatas, Loading, Error } = useLoadMyData();
  const [topTrainers, setTopTrainers] = useState([]);
  //   console.log(TchDatas,Loading,Error);
  // console.log(topTrainers);

  useEffect(() => {
    // TchDatas.map((d) => console.log(d));
    const filterTopTrainers = TchDatas.filter((d) => d.rating >= 5);
    setTopTrainers(filterTopTrainers);
  }, [TchDatas, setTopTrainers]);

  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error} </p>;

  return (
    <div>
      <section>
        <HeroBannar></HeroBannar>
      </section>
      <section>
        <SwiperBannar></SwiperBannar>
      </section>

      <section className="my-10">
        <h1 className="text-3xl font-bold ">Popular Skills</h1>
        <div className="grid grid-cols-12 gap-4 w-11/12 mx-auto my-10">
          {TchDatas.map((skillData) => (
            <SkillCard key={skillData.skillId} skillData={skillData} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-3xl font-bold ">Top Rated Trainer</h1>
        <div className="grid grid-cols-12 items-center gap-4 mx-auto w-full">
          {topTrainers.map((TrainerData) => (
            <TopTrainer
              key={TrainerData.providerName}
              TrainerData={TrainerData}
            ></TopTrainer>
          ))}
        </div>
      </section>
      <section className="w-10/12 h-fit mx-auto px-5 py-10 text-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white rounded-4xl grid grid-cols-12 g-4 space-y-5">
        <h1 className="text-3xl text-center pb-10 font-bold col-span-12 ">
          About Us
        </h1>
        <Status />
      </section>

      <section className="my-20 space-y-5 grid grid-cols-12 gap-4 ">
        <h1 className="text-3xl font-bold col-span-12 ">How It's Work</h1>
        <HowWorkCards></HowWorkCards>
      </section>
    </div>
  );
};

export default HomePage;
