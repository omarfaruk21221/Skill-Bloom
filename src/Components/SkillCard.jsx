import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

{
  /* Popular Skills – Cards with: image Skill name Rating Price “View Details”
button */
}
const SkillCard = ({ skillData }) => {
  // console.log(skillData);
  const {
    skillId,
    image,
    skillName,
    price,
    providerName,
    category,
    slotsAvailable,
    rating,
  } = skillData;
  return (
    <div className="card bg-base-100 shadow-sm col-span-12 md:col-span-6 lg:col-span-4  p-4 w-fit">
      <figure>
        <img className="rounded" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-xl">{skillName}</h1>
        <h2 className="text-lg font-semibold">
          <span className="text-blue-900  ">Trainer: </span>
          <span className=" text-blue-600"> {providerName}</span>
        </h2>
        <div className="w-full flex justify-between items-center">
          <aside>
            <span className="text-lg text-secondary">Price: </span>{" "}
            <span className="badge badge-secondary py-4 text-lg font-semibold">
              {price} Tk{" "}
            </span>
          </aside>
          <aside className="flex items-center gap-2 text-lg bg-secondary font-semibold rounded-2xl px-2 text-amber-300 ">
            {" "}
            <FaStar /> {rating}
          </aside>
        </div>

        <div className="card-actions justify-between">
          <div className="badge bg-amber-300 p-4 font-semibold ">
            {category}
          </div>
          <div className="badge bg-green-300 p-4 font-semibold">
            Available Seat: {slotsAvailable}
          </div>
        </div>
        <Link to={`/skilldetails/${skillId}`} className="btn btn-primary my-3">View Details</Link>
      </div>
    </div>
  );
};

export default SkillCard;
