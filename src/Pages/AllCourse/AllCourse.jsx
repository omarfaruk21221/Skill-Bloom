import React from "react";
import useLoadMyData from "../../Utilities/useLoadMyData";
import LoadingSpine from "../../Components/Loading/LoadingSpine";
import SkillCard from "../../Components/SkillCard";

const AllCourse = () => {
  const { TchDatas, Loading, Error } = useLoadMyData(
    "../../../public/AllSkills.json"
  );
  // console.log(TchDatas, Loading, Error);
  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error} </p>;
  return (
    <div className="w-full">
      <h1 className=" text-3xl font-bold text-primary  text-center pt-5 ">
        Our All Course
      </h1>
      <span className="divider"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-10">
        {TchDatas.map((skillData) => (
          <SkillCard key={skillData.id} skillData={skillData} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
