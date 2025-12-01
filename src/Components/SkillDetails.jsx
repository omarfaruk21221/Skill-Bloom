import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";
import useLoadMyData from "../Utilities/useLoadMyData";
import LineLOader from "./Loading/LineLOader";
import Modal from "react-modal";
import { toast } from "react-toastify";

const SkillDetails = () => {
  const { TchDatas, Loading, Error } = useLoadMyData();
  const { skillId } = useParams();
  const [skill, setSkill] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (TchDatas && Array.isArray(TchDatas)) {
      const filterSkill = TchDatas?.find((d) => d.skillId == skillId);
      setSkill(filterSkill);
    }
  }, [TchDatas, skillId]);

  if (Loading) return <LineLOader />;
  if (Error) return <p className="text-red-500">{Error}</p>;
  if (!skill)
    return <p className="text-center text-gray-500">Skill not found</p>;
  const {
    image,
    skillName,
    price,
    providerName,
    providerEmail,
    description,
    category,
    slotsAvailable,
    rating,
  } = skill;
  //   console.log(skillName);

  // HandleBooking Fro Submit feature
  const handleBookingForm = (e) => {
    e.preventDefault();
    toast(`You booked: ${skillName} ✅`);
    setIsOpen(false);
  };
  return (
    <div className="hero min-h-screen">
      <div className=" hero-content  w-8/11 min-h-[50vh] flex-col lg:flex-row shadow-md bg-base-100 p-5 ">
        <figure className=" shadow-md ">
          <img
            className="rounded-xl mx-auto my-auto p-2"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="space-y-2 p-5">
          <h1 className="text-3xl font-bold">{skillName}</h1>
          {/* provider anme nad category section  */}
          <section className="mt-6">
            <span className="flex justify-between items-center ">
              <p className="text-lg">
                by: <span className="text-secondary">{providerName}</span>
              </p>
              <p className="text-secondary underline">{providerEmail}</p>
            </span>
            <p>
              <span>Catagory : </span>
              <span className="text-blue-400 font-semibold">{category}</span>
            </p>
          </section>
          <span className="divider"></span>

          {/* rating and seat section  */}
          <section className=" flex items-center justify-between">
            <p className="text-lg flex items-center gap-2">
              {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <span>{rating}</span>
              <span> Rating</span>
            </p>
            <div className="badge bg-green-300 p-4 font-semibold">
              Available Seat: {slotsAvailable}
            </div>
          </section>

          {/* desription ssection  */}
          <section>
            <span className="divider"></span>
            <p className="">{description}</p>
            <span className="divider"></span>
          </section>

          {/* price section */}
          <section className=" flex items-center gap-4 text-2xl">
            <p className=" text-secondary font-semibold">
              <span>Price:</span>{" "}
              <span className=" bg-secondary py-1 rounded-xl text-base-100 px-3">
                {price} Tk{" "}
              </span>
            </p>{" "}
          </section>

          <Link
            onClick={() => {
              setIsOpen(true);
            }}
            className="btn btn-primary my-6 px-10 py-6 text-xl"
          >
            Book Now
          </Link>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="bg-blue-300 p-6 rounded-lg shadow-xl w-96 mx-auto mt-20 relative"
            overlayClassName="fixed inset-0 bg-base-100/50 flex justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
            <form onSubmit={handleBookingForm} className="space-y-3">
              <h1 className="text-2xl text-blue-900 text-center font-bold">
                Booking From
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
    </div>
  );
};

export default SkillDetails;
