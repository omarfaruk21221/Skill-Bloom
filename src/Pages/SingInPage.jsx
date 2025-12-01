import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { use, useRef, useState } from "react";

const SingInPage = () => {
  const { SignIn, SignInbyGoogle, forgetPassword } = use(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const nevigate = useNavigate();
  const emailRef = useRef();

  // Sing In btn Handle
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SignIn(email, password)
      .then((UserContainer) => {
        const user = UserContainer.user;
        nevigate(`${location.state ? location.state : "/"}`);
        // console.log(user);
        toast(`Log In Successfully !!! ${user?.displayName}`);
      })
      .catch((error) => {
        // console.log(error.massage);
        toast(error.code, error.message);
      });

    // console.log("login Btn Cliked", email, password);
  };
  ///forget password feature
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // console.log("Forget Password", email);
    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    // console.log("google btn clicked");
    SignInbyGoogle()
      .then((userInfo) => {
        const user = userInfo.user;
        nevigate(`${location.state ? location.state : "/"}`);
        // console.log(user);
        toast(`Log In Successfully !!! ${user?.displayName} Sir`);
      })
      .catch((error) => {
        // console.log(error.massage);
        toast(error.code, error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <h1 className="text-2xl text-center font-bold text-accent">
              Sign In Your Account 😉
            </h1>
            <div className="divider"></div>
            <fieldset className="fieldset">
              {/* Email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                ref={emailRef}
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

              <div>
                <Link
                  to="/auth/forgetpassword"
                  state={{ email: emailRef.current?.value }}
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4 hover:bg-secondary">
                SIgn In
              </button>
            </fieldset>
            <div className="text-accent text-center my-2">
              Don't h Have an account ?{" "}
              <span>
                <Link
                  to="/auth/SignUp"
                  className="text-green-500 hover:text-secondary  "
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
          <div className="divider">OR</div>
          {/* googleLogIn */}
          <div className=" space-y-2 flex items-center justify-center gap-7">
            <button
              onClick={handleGoogleLogIn}
              className="btn  btn-secondary w-full p-4"
            >
              <FaGoogle /> Log In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingInPage;
