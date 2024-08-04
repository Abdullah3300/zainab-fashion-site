import React from "react";

const Footer = () => {
  return (
    <div className="h-[30vh] md:h-[30vh] bg-[#0B0201] flex flex-col justify-center items-center">
      <div className="flex gap-8">
        <a
          href="#home"
          className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
        >
          ABOUT
        </a>
        <a
          href="#gallery"
          className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
        >
          GALLERY
        </a>
      </div>
      <p className="text-white text-[10px] mt-5">
        © Zainab - Fashion Designer || All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
