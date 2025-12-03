import React from "react";
import Marquee from "react-fast-marquee";
import useLoadMyData from "../Utilities/useLoadMyData";
import LoadingSpine from "./Loading/LoadingSpine";

const Sponsored = () => {
  const { TchDatas, Loading, Error } = useLoadMyData(
    "/SponsoredData.json"
  );
  if (Loading) return <LoadingSpine />;
  if (Error) return <p>{Error} </p>;
  return (
    <div>
      <h1 className="text-2xl text-center font-bold pt-5 ">
        Sponsored by (not actually):
      </h1>
      <span className="divider"></span>
      <Marquee>
        <div className="flex gap-20 items-center pt-5 pb-10 ">
          {TchDatas?.map((spn) => (
            <img className="rounded-4xl" src={spn.logo} alt={spn.name} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsored;
