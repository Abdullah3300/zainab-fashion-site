import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[#0B0201] p-5 md:p-12 md:pb-20 text-white " id="gallery">
      <div className="grid md:grid-cols-2 shadow-xl shadow-red-700">
        <div className="filter brightness-50 hidden md:block rounded-tr-xl rounded-br-xl">
          <img
            src="/img2.jpg"
            alt=""
            className="rounded-tr-xl rounded-br-xl h-[100%]"
          />
        </div>
        <div className="rounded-xl md:rounded-tr-none md:rounded-br-none shadow-2xl grid md:grid-cols-2 gap-5">
          <div className="">
            <img
              src="/img10.jpg"
              alt=""
              className="rounded-md w-[100%] h-[100%]"
            />
          </div>
          <div className="">
            <img
              src="/img7.jpg"
              alt=""
              className="rounded-md w-[100%] h-[100%]"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/img6.jfif"
              alt=""
              className="w-[100%] h-[100%] rounded-md"
            />
          </div>
          <div className="">
            <img
              src="/img8.jpg"
              alt=""
              className=" w-[100%] h-[100%] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
