import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className=" mx-auto overflow-visible">
      <nav className="backdrop-blur-lg bg-primary sticky top-0 z-50">
        <Navbar />
      </nav>
      <main className=" max-w-7xl mx-auto min-h-screen flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
