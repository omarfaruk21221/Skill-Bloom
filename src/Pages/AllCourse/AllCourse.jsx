import React, { useState } from "react";
import useLoadMyData from "../../Utilities/useLoadMyData";
import LoadingSpine from "../../Components/Loading/LoadingSpine";
import SkillCard from "../../Components/SkillCard";

const AllCourse = () => {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { TchDatas, Loading, Error } = useLoadMyData(
    "../../../public/AllSkills.json"
  );
  const filteredCourses = TchDatas.filter((course) =>
    course.title.toLowerCase().includes(searchText.toLowerCase())
  );
  // console.log(TchDatas, Loading, Error);
  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error} </p>;

  // ↕ SORTING
  if (sortBy === "name") {
    TchDatas.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortBy === "low-high") {
    TchDatas.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "high-low") {
    TchDatas.sort((a, b) => b.price - a.price);
  }
  return (
    <div className="w-full">
      <h1 className=" text-3xl font-bold text-primary  text-center pt-5 ">
        Our All Course
      </h1>
      <span className="divider"></span>

      <section className=" flex justify-between items-center">
        {/* Sort */}
        <select
          className="select select-bordered w-full md:w-40"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name (A → Z)</option>
          <option value="low-high">Price (Low → High)</option>
          <option value="high-low">Price (High → Low)</option>
        </select>

        {/** Search */}
        <label className="input border border-primary rounded-4xl text-primary">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto my-10">
        {filteredCourses.map((skillData) => (
          <SkillCard key={skillData.id} skillData={skillData} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
