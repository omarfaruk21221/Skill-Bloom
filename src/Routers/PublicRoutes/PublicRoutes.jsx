import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayout";
import SkillDetailsPage from "../../Pages/SkillDetailsPage";
import AuthLayout from "../../Layouts/AuthLayout";
import SingInPage from "../../Pages/SingInPage";
import SingUpPage from "../../Pages/SingUpPage";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import ProfilePage from "../../Pages/ProfilePage";
import ForgetPasswordPage from "../../Pages/ForgetPasswordPage";
import Error404 from "../../Components/Error404";
import HomePage from "../../Pages/HomePage";
import AllCourse from "../../Pages/AllCourse/AllCourse";
import About from "../../Pages/About";
import Contract from "../../Pages/Contract";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        // path: "/home",
        element: <HomePage />,
      },
      {
        path: "/all-course",
        element: <AllCourse />,
      },
      {
        path: "/skilldetails/:id",
        element: <SkillDetailsPage />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contract",
        element: <Contract />,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <ProfilePage />
          </PrivetRoutes>
        ),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SingInPage />,
      },
      {
        path: "/auth/SignUp",
        element: <SingUpPage />,
      },
      {
        path: "/auth/forgetpassword",
        element: <ForgetPasswordPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);

export default PublicRoutes;
