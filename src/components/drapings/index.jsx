import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Drapings = () => {
  return (
    <div
      className=" p-5 md:p-12 md:pb-20 text-white space-y-20 other-section"
      id="drapings"
    >
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase md:text-3xl">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Drapings
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 10 }).map((item, index) => (
            <div className="shadow-xl shadow-red-700" key={index}>
              <img
                src={`/projects/drapings/d${index + 1}.jpeg`}
                alt=""
                className="w-[100%] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drapings;
