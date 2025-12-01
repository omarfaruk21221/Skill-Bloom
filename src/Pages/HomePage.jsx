import { useEffect, useState } from "react";
import useLoadMyData from "../Utilities/useLoadMyData";
import SkillCard from "../Components/SkillCard";
import LoadingSpine from "../Components/Loading/LoadingSpine";
import Status from "../Components/Status";

import bannarImg from "../assets/bannaImg.png";
import HeroBannar from "../Components/Header/HeroBannar";
import Trainers from "../Components/Trainers";

const HomePage = () => {
  const { TchDatas, Loading, Error } = useLoadMyData(
    "../../public/TopCourse.json"
  );
  // console.log(TchDatas, Loading, Error);

  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error} </p>;

  return (
    <div>
      <section
        className="relative w-full h-[70vh]  my-1 bg-cover bg-center flex items-end pb-25 justify-center"
        style={{ backgroundImage: `url(${bannarImg})` }}
      >
        <button className="btn btn-accent"> Our Services</button>
      </section>

      <section className="max-w-6xl mx-auto flex  relative top-[-50px] ">
        <Status />
      </section>

      <section className="my-10">
        <h1 className="text-3xl font-bold ">Popular Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-10">
          {TchDatas.map((skillData) => (
            <SkillCard key={skillData.id} skillData={skillData} />
          ))}
        </div>
      </section>

      <section>
        <HeroBannar />
      </section>

      <section className="mt-20 max-w-6xl mx auto">
        <Trainers />
      </section>

      {/* <section>
        <SwiperBannar></SwiperBannar>
      </section> */}

      {/* <section className="w-10/12 h-fit mx-auto px-5 py-10 text-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white rounded-4xl grid grid-cols-12 g-4 space-y-5">
        <h1 className="text-3xl text-center pb-10 font-bold col-span-12 ">
          About Us
        </h1>
      </section> */}

      {/* <section className="my-20 space-y-5 grid grid-cols-12 gap-4 ">
        <h1 className="text-3xl font-bold col-span-12 ">How It's Work</h1>
        <HowWorkCards></HowWorkCards>
      </section> */}
    </div>
  );
};

export default HomePage;
