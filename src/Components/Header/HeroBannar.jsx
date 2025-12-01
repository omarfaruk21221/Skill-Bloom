import React from "react";
import HeroBannerImg from "../../assets/HeroBannar.svg";

const HeroBannar = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] ">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse text-primary">
        <img
          src={HeroBannerImg}
          className="max-w-sm rounded-lg shadow-2xl remove-bg "
        />
        <div className="w-[50%] ">
          <h1 className="text-4xl font-semibold">
            {" "}
            Your Future Changing Platform Skill Bllom
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBannar;
