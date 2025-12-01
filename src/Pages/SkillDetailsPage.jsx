import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import SkillDetails from "../Components/SkillDetails";

const SkillDetailsPage = () => {
  return (
    <div className="bg-base-200">
      <nav>
        <Navbar />
      </nav>
      <main className=" mt-15 ">
        <h1 className="text-5xl font-bold text-center"><span className="text-red-400">Course</span><span className="text-blue-400"> Details</span></h1>
        <SkillDetails />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default SkillDetailsPage;
