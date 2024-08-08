import React from "react";
import Header from "../header";

const Home = () => {
  return (
    <div className="home-section h-[100vh]" id="home">
      <Header />
      <h1 className="uppercase BlackBorneo flex justify-center text-center pb-48 text-[65px] lg:text-[120px] tracking-widest items-center h-[100%] text-white">
        Dark Darlings
      </h1>
    </div>
  );
};

export default Home;
