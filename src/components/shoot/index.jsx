import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Shoot = () => {
  return (
    <div
      className=" p-5 md:p-12 md:pb-20 text-white space-y-20 other-section"
      id="shoot"
    >
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Shoot
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Array.from({ length: 33 }).map((item, index) => (
            <div className="shadow-xl shadow-red-700" key={index}>
              <img
                src={`/projects/shoot/s${index + 1}.jpg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="shadow-xl shadow-red-700">
          <img
            src={`/projects/shoot/bg.jpg`}
            alt=""
            className="w-[100%] rounded-md"
          />
        </div>
      </div>
      <div id="thesis">
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            FInal Thesis
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-10">
          <div className="shadow-xl shadow-red-700">
            <img src={`/thesis.jpg`} alt="" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoot;
