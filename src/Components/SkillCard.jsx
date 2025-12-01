import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

{
  /* Popular Skills – Cards with: image Skill name Rating Price “View Details”
button */
}
const SkillCard = ({ skillData }) => {
  const { id, authors, banner_image, title, price } = skillData;
  console.log(authors[0]);
  return (
    <div className="card bg-base-100 shadow-sm hover:border translate-0.5 hover:scale-105 ease-in hover:border-warning">
      <figure>
        <img
          className=" w-full max-h-40  rounded-t-lg"
          src={banner_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h1 className="card-title text-primary ">{title}</h1>
        <span className="flex justify-between items-center">
          <p className=" text-primary"> {authors[0]}</p>
          <p className="text-md font-semibold">{price} Tk </p>
        </span>
        <Link to={`/skilldetails/${id}`} className="btn  btn-outline border-warning">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
