import React from "react";
import Header from "../header";

const Home = () => {
  return (
    <div className="home-section h-[100vh]" id="home">
      <Header />
      <h1 className="uppercase flex justify-center text-center text-[45px] pb-32 md:text-[60px] tracking-widest items-center h-[100%] text-white">
        Dark Darlings
      </h1>
    </div>
  );
};

export default Home;
