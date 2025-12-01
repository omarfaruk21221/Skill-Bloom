import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SingUpPage = () => {
  const { createUser, setUser, updatedUserSet } = use(AuthContext);
  const [show, setShow] = useState(false);
  const [pasError, setPasError] = useState("");
  const nevigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!pattern.test(password)) {
      toast.error("Password must have 6+ chars, uppercase, number & symbol");
      setPasError("Password must have 6+ chars, uppercase, number & symbol");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updatedUserSet({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            nevigate("/");
          })
          .catch((error) => {
            toast(error.message);
            // console.log(error.message);
          });
        toast("Regiter Successfully");
      })
      .catch((error) => {
        // console.log(error.message);
        toast(error.message);
      });
  };

  // console.log("Resgiter Btn Clicked", name, photo, email, password);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-2xl text-center font-bold text-accent">
            Register your account
          </h1>
          <div className="divider"></div>
          <fieldset className="fieldset">
            {/* user Name  */}
            <label className="label">User Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              name="name"
              required
            />
            {/* photo  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your photo url"
              name="photo"
              required
            />
            {/* Email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            {/* passeword */}
            <label className="label">Password</label>
            <div className=" relative">
              <input
                type={show ? "text" : "password"}
                className="input"
                placeholder="Password"
                name="password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="text-xl absolute top-2 right-6 z-50"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <p className="text-red-500 text-md">{pasError}</p>
            <button
              type="submit"
              className="btn btn-neutral mt-4 hover:bg-secondary"
            >
              Register
            </button>
          </fieldset>
          <div className="text-accent text-center">
            Have an account ?{" "}
            <span>
              <Link to="/auth" className="text-green-500 hover:text-secondary">
                Sign In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUpPage;
