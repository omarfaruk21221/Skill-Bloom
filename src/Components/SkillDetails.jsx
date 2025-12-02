import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useLoadMyData from "../Utilities/useLoadMyData";
import LineLOader from "./Loading/LineLOader";
import Modal from "react-modal";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const SkillDetails = () => {
  const { TchDatas, Loading, Error } = useLoadMyData("/AllSkills.json");
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (TchDatas && Array.isArray(TchDatas)) {
      const found = TchDatas.find((d) => d.id == id);
      setSkill(found);
    }
  }, [TchDatas, id]);

  if (Loading) return <LineLOader />;
  if (Error) return <p className="text-center text-red-500">{Error}</p>;
  if (!skill)
    return <p className="text-center text-gray-500">Skill not found</p>;

  const {
    title,
    banner_image,
    authors,
    duration,
    level,
    language,
    certification,
    course_url,
    prerequisites,
    skills_gained,
    modules,
    quizzes,
    ratings,
    reviews_count,
    support_available,
    price,
  } = skill;

  // Booking submit
  const handleBookingForm = (e) => {
    e.preventDefault();
    toast(`You booked: ${title} ✅`);
    setIsOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-base-200 py-10">
      <div className="w-11/12 mx-auto p-6 bg-white shadow-xl rounded-xl">
        <section className=" grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center  ">
          <aside className="md:col-span-1">
            {/* Banner */}
            <img
              src={banner_image}
              alt={title}
              className="w-full max-h-[350px] object-cover rounded-xl"
            />
          </aside>

          <aside className="md:col-span-2 lg:col-span-3">
            {/* Header Section */}
            <div className="mt-6">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-gray-500 mt-1">By: {authors?.join(", ")}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 bg-base-100 p-5 rounded-xl mt-6">
              <div>
                <p className="font-semibold">Duration</p>
                <span className="text-gray-600">{duration}</span>
              </div>
              <div>
                <p className="font-semibold">Level</p>
                <span className="text-gray-600">{level}</span>
              </div>
              <div>
                <p className="font-semibold">Language</p>
                <span className="text-gray-600">{language}</span>
              </div>
              <div>
                <p className="font-semibold">Certification</p>
                <span
                  className={`px-2 py-1 rounded text-white ${
                    certification ? "bg-green-500" : "bg-red-400"
                  }`}
                >
                  {certification ? "Yes" : "No"}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-6 text-lg">
              {Array.from({ length: Math.floor(ratings) }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <span className="font-semibold">{ratings}</span>
              <span className="text-gray-500">({reviews_count} reviews)</span>
            </div>
          </aside>
        </section>

        <span className="divider"></span>

        {/* Skills Gained */}
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-2">Skills You Will Gain</h2>
          <div className="flex flex-wrap gap-3">
            {skills_gained?.map((s, idx) => (
              <span key={idx} className="badge badge-primary p-3 text-white">
                {s}
              </span>
            ))}
          </div>
        </div>

        <section className="mt-6 flex justify-between items-center px-10 ">
          {/* Prerequisites */}
          <div className="">
            <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
            <p className="list-disc ml-6 text-gray-700">{prerequisites}</p>
          </div>

          {/* Support */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">
              Support Available
            </h3>{" "}
             <span
                  className={`px-2 py-1 rounded text-white  ${
                    support_available ? "bg-green-500" : "bg-red-400"
                  }`}
                >
                  {support_available ? "Yes" : "No"}
                </span>

          </div>

          {/* Modules & Quizzes */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Modules</h3>{" "}
            <p>
              Module Name: <span>{modules[0].name}</span>{" "}
            </p>
            <p>
              Module Lessons: <span>{modules[0].lessons}</span>{" "}
            </p>
          </div>

          {/* Quiz */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Quiz</h3>{" "}
            <span
              className={`px-2 py-1 rounded text-white ${
                quizzes ? "bg-green-500" : "bg-red-400"
              }`}
            >
              {quizzes ? "Yes" : "No"}
            </span>
          </div>
        </section>

        {/* Price */}
        <div className="mt-6 text-2xl font-bold">
          Price:
          <span className="text-primary ml-2">{price} TK</span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-primary px-8 py-3 text-xl"
          >
            Book Now
          </button>

          {course_url && (
            <a
              href={course_url}
              target="_blank"
              className="btn btn-secondary px-8 py-3 text-xl"
            >
              Visit Course
            </a>
          )}
        </div>

        {/* Booking Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto mt-20 relative"
          overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
          >
            ✕
          </button>

          <form onSubmit={handleBookingForm} className="space-y-3">
            <h1 className="text-2xl text-blue-900 text-center font-bold">
              Booking Form
            </h1>

            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <button
              type="submit"
              className="btn btn-secondary w-full hover:bg-green-500"
            >
              Confirm Booking
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default SkillDetails;
