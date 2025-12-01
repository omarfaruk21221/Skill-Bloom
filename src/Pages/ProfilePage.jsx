import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import Modal from "react-modal";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const { user, updatedUserSet, setUser } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  // Sync modal inputs with user data when modal opens
  useEffect(() => {
    if (user && isOpen) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user, isOpen]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Update Firebase profile
    updatedUserSet({ displayName: name, photoURL: photo })
      .then(() => {
        // Update local AuthContext
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        setIsOpen(false); // Close modal
      })
      .catch((err) => toast.error(err.message));
  };

  if (!user) return null;

  const { displayName, photoURL, email } = user;

  return (
    <div className="hero bg-base-100 w-8/12 mx-auto my-12">
      <div className="hero-content flex-col">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">My Profile</h1>
        <span className="divider"></span>

        <img
          src={photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="User"
          className="w-30 h-30 md:w-72 md:h-72 border-4 border-secondary rounded-full shadow-2xl mb-4 object-cover"
        />

        <div className="space-y-3 w-full">
          <h1 className="text-2xl md:text-4xl text-center font-bold">{displayName}</h1>
          <p className="text-md md:text-lg text-center text-secondary">{email}</p>

          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-secondary hover:btn-primary w-full my-6 px-10 py-4 text-lg md:text-xl"
          >
            Update Your Profile
          </button>

          {/* Modal */}
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="bg-amber-100 p-6 rounded-lg shadow-xl w-96 mx-auto mt-20 relative outline-none"
            overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
            >
              ✕
            </button>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <h1 className="text-2xl text-amber-700 text-center font-bold">
                Update Your Profile
              </h1>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                required
              />

              <input
                type="text"
                placeholder="Photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="input input-bordered w-full"
                required
              />

              <button
                type="submit"
                className="btn text-white hover:bg-amber-700 w-full bg-green-500"
              >
                Update
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
