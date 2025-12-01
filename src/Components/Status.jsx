import React from "react";
import {
  FaChalkboardTeacher,
  FaSellcast,
  FaUserGraduate,
  FaUserInjured,
} from "react-icons/fa";
const Status = () => {
  return (
    <>
      <section className="card col-span-12 md:col-span-6 lg:col-span-3 w-60 h-40 mx-auto pt-6 bg-base-100 text-primary shadow-2xl text-center space-y-1 hover:bg-primary-content hover:text-base-100 hover:scale-110 transform ease-in-out">
        <span className="text-3xl mx-auto text-green-500 ">
          <FaUserGraduate />
        </span>
        <h1 className="text-xl font-bold">Total Student</h1>
        <h2 className="text-4xl font-bold py-1">7000+</h2>
      </section>
      <section className="card col-span-12 md:col-span-6 lg:col-span-3 w-60 h-40 mx-auto pt-6 bg-base-100 text-primary shadow-2xl text-center space-y-1 hover:bg-primary-content hover:text-base-100 hover:scale-110 transform ease-in-out">
        <span className="text-3xl mx-auto text-green-500 ">
          <FaSellcast />
        </span>
        <h1 className="text-xl font-bold">Total Skills</h1>
        <h2 className="text-4xl font-bold py-1">20+</h2>
      </section>

      <section className="card col-span-12 md:col-span-6 lg:col-span-3 w-60 h-40 mx-auto pt-6 bg-base-100 text-primary shadow-2xl text-center space-y-1 hover:bg-primary-content hover:text-base-100 hover:scale-110 transform ease-in-out">
        <span className="text-3xl mx-auto text-green-500 ">
          <FaChalkboardTeacher />
        </span>
        <h1 className="text-2xl font-bold">Total Trainer</h1>
        <h2 className="text-4xl font-bold py-1">100+</h2>
      </section>
      <section className="card col-span-12 md:col-span-6 lg:col-span-3 w-60 h-40 mx-auto pt-6 bg-base-100 text-primary shadow-2xl text-center space-y-1 hover:bg-primary-content hover:text-base-100 hover:scale-110 transform ease-in-out">
        <span className="text-3xl mx-auto text-green-500 ">
          <FaUserInjured />
        </span>
        <h1 className="text-2xl font-bold">Total Empoloy</h1>
        <h2 className="text-4xl font-bold py-1">7000+</h2>
      </section>
    </>
  );
};

export default Status;
