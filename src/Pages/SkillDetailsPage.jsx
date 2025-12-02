import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SkillDetails from "../Components/SkillDetails";

const SkillDetailsPage = () => {
  return (
    <div className=" w-full bg-base-200 mx-auto my-5">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-red-400">Course</span>
        <span className="text-blue-400"> Details</span>
      </h1>
      <span className="divider"></span>
      <SkillDetails />
    </div>
  );
};

export default SkillDetailsPage;
