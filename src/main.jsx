import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import PublicRoutes from "./Routers/PublicRoutes/PublicRoutes.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={PublicRoutes} />
      <Toaster />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
