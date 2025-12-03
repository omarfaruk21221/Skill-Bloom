import { useEffect, useState } from "react";
import useLoadMyData from "../Utilities/useLoadMyData";
import SkillCard from "../Components/SkillCard";
import LoadingSpine from "../Components/Loading/LoadingSpine";
import Status from "../Components/Status";

import bannarImg from "../assets/bannaImg.png";
import HeroBannar from "../Components/Header/HeroBannar";
import Trainers from "../Components/Trainers";
import SwiperBannar from "../Components/Header/SwiperBannar";
import HowWorkCards from "../Components/HowWorkCards";
import Sponsored from "../Components/Sponsored";
import { Link } from "react-router";

const HomePage = () => {
  const { TchDatas, Loading, Error } = useLoadMyData("/TopCourse.json");

  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error}</p>;

  return (
    <div className="w-full overflow-hidden">
      {/* HERO BANNER */}
      <section
        className="
          relative w-full
          h-[40vh] sm:h-[55vh] md:h-[70vh]
          bg-cover bg-center
          flex items-center justify-center
        "
        style={{ backgroundImage: `url(${bannarImg})` }}
      >
        <button className="btn btn-accent px-6 py-3 text-lg">
          Our Services
        </button>
      </section>
      {/* STATUS SECTION */}
      <section
        className="
    max-w-6xl mx-auto px-4
    flex flex-col sm:flex-row
    gap-4 sm:gap-6 md:gap-8
    items-center sm:items-start
    justify-center sm:justify-between
    mt-[-40px] md:mt-[-50px]
  "
      >
        <Status />
      </section>

      {/* POPULAR SKILLS SECTION */}
      <section className="my-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">Popular Skills</h1>

        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6 md:gap-8 mt-8
          "
        >
          {TchDatas?.map((skillData) => (
            <SkillCard key={skillData.id} skillData={skillData} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link className="btn btn-primary px-6 py-3" to={"/all-course"}>
            See More Course
          </Link>
        </div>
      </section>

      {/* SWIPER BANNAR */}
      <section className="px-2 md:px-0">
        <SwiperBannar />
      </section>

      {/* TRAINERS */}
      <section className="my-20 max-w-6xl mx-auto px-4">
        <Trainers />
      </section>

      {/* HERO BANNAR 2 */}
      <section className="px-2 md:px-0">
        <HeroBannar />
      </section>

      {/* SPONSORED */}
      <section
        className="
          max-w-7xl mx-auto text-center
          bg-gradient-to-br
          from-blue-500 via-indigo-500 to-purple-600
          text-white rounded-3xl
          my-20 p-6 md:p-10
        "
      >
        <Sponsored />
      </section>

      {/* HOW IT WORKS */}
      <section className="my-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">How It's Work</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HowWorkCards />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
