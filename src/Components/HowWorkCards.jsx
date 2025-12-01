import React from "react";
import {
  FaChalkboardTeacher,
  FaSearch,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";

const HowWorkCards = () => {
  return (
    <>
      {/* Card 1 */}
      <div className=" h-50 cards col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden space-y-2 border border-gray-300 p-4 cursor-pointer hover:shadow-lg rounded-xl transition">
        <figure className="text-4xl text-indigo-500">
          <FaSearch />
        </figure>
        <h1 className="text-lg font-semibold">Discover Your Passion</h1>
        <p className="text-gray-600">
          Explore thousands of trending skills and find the perfect match for
          your career goals or personal interests.
        </p>
      </div>

      {/* Card 2 */}
      <div className="h-50 cards col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden space-y-2 border border-gray-300 p-4 cursor-pointer hover:shadow-lg rounded-xl transition">
        <figure className="text-4xl text-green-500">
          <FaUserGraduate />
        </figure>
        <h1 className="text-lg font-semibold">Connect with Experts</h1>
        <p className="text-gray-600">
          Join top-rated trainers and mentors who guide you step-by-step to
          master your chosen skill.
        </p>
      </div>

      {/* Card 3 */}
      <div className=" h-50 cards col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden space-y-2 border border-gray-300 p-4 cursor-pointer hover:shadow-lg rounded-xl transition">
        <figure className="text-4xl text-yellow-500">
          <FaChalkboardTeacher />
        </figure>
        <h1 className="text-lg font-semibold">Learn Anytime, Anywhere</h1>
        <p className="text-gray-600">
          Access interactive lessons, quizzes, and projects at your own pace
          from any device, anytime.
        </p>
      </div>

      {/* Card 4 */}
      <div className=" h-50 cards col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden space-y-2 border border-gray-300 p-4 cursor-pointer hover:shadow-lg rounded-xl transition">
        <figure className="text-4xl text-pink-500">
          <FaTrophy />
        </figure>
        <h1 className="text-lg font-semibold">Showcase Your Success</h1>
        <p className="text-gray-600">
          Earn certificates, build your portfolio, and share your achievements
          with the world confidently.
        </p>
      </div>
    </>
  );
};

export default HowWorkCards;
