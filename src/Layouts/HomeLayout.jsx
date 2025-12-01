import React from "react";
import HomePage from "../Pages/HomePage";
import Navbar from "../Components/Header/Navbar";
import MyContainer from "../Components/CustomTag/MyContainer";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import HeroBannar from "../Components/Header/HeroBannar";

const HomeLayout = () => {
  return (
    <div className=" w-11/12 mx-auto">

        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main className="min-h-screen flex flex-1 ">
          <Outlet></Outlet>
        </main>

        <footer>
          <Footer />
        </footer>

    </div>
  );
};

export default HomeLayout;
