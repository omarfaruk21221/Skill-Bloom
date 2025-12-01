import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayout";
import SkillDetailsPage from "../../Pages/SkillDetailsPage";
import AuthLayout from "../../Layouts/AuthLayout";
import SingInPage from "../../Pages/SingInPage";
import SingUpPage from "../../Pages/SingUpPage";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import ProfilePage from "../../Pages/ProfilePage";
import ForgetPasswordPage from "../../Pages/ForgetPasswordPage";
import Error404 from "../../Components/Error404"
import HomePage from "../../Pages/HomePage";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        // path: "/home",
        element: <HomePage/>,
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
    path: "/skilldetails/:skillId",
    element: (
      <PrivetRoutes>
        <SkillDetailsPage />
      </PrivetRoutes>
    ),
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
    element:<Error404/>,
  },
]);

export default PublicRoutes;
