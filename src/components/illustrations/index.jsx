import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Illustrations = () => {
  return (
    <div
      className=" p-5 md:p-12 md:pb-20 text-white space-y-20 other-section"
      id="illustrations"
    >
      <div>
        <div className="text-center px-8 md:px-12 text-lg font-semibold text-white">
          <h3 className="flex items-center justify-center gap-5 uppercase">
            <span className="text-xl">
              <FaQuoteLeft />
            </span>
            Illustrations
            <span className="text-xl">
              <FaQuoteRight />
            </span>
          </h3>
        </div>
        <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <div className="shadow-xl shadow-red-700" key={item + index}>
                <img
                  src={`/projects/illustrations/i${index + 1}.png`}
                  alt=""
                  className="w-[100%] rounded-md"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
