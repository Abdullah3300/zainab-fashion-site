import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <div className="bg-[#0B0201] p-5 md:p-12 text-white " id="about">
      <div className="grid md:grid-cols-2 shadow-xl shadow-red-700">
        <div className="filter brightness-50 rounded-tr-xl rounded-br-xl block md:hidden">
          <img
            src="/img1.jpg"
            alt=""
            className="rounded-tr-xl rounded-br-xl w-[100%] h-[100%]"
          />
        </div>
        <div className="rounded-xl md:rounded-tr-none md:rounded-br-none shadow-2xl p-6 px-10 ">
          <h3 className="text-center mb-6 uppercase font-semibold ">
            Dark Darlings
          </h3>
          <p className="text-justify text-md leading-9">
            My name is{" "}
            <span className="text-lg font-semibold  uppercase text-red-600">
              Zainab
            </span>{" "}
            , I am a fashion design student. Fashion design is an exciting and
            dynamic field that combines creativity and practicality to create
            wearable art. As a student, I am learning about trend analysis,
            garment construction, textile selection, and the importance of
            sustainability in fashion. This education will enable me to bring my
            innovative ideas to life and make a mark in the fashion industry.
          </p>
          <div className="grid gap-4 mt-6">
            <div className="flex justify-center text-center bg-[#5A0C0D] items-center text-sm flex-col gap-2 shadow-lg p-3 rounded-lg">
              <IoMailUnreadOutline className="text-xl" />
              <p>Email</p>
              <p>zainabnadir100@gmail.com</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-center text-center bg-[#5A0C0D] items-center text-sm flex-col gap-2 shadow-lg p-3 rounded-lg">
                <FaWhatsapp className="text-xl" />
                <p>WhatsApp</p>
                <p>03006943343</p>
              </div>
              <div className="flex justify-center text-center bg-[#5A0C0D] items-center text-sm flex-col gap-2 shadow-lg p-3 rounded-lg">
                <FaGraduationCap className="text-xl" />
                <p>Zainab Nadir</p>
                <p>Institute of Art and Design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="filter brightness-50 rounded-tr-xl rounded-br-xl hidden md:block">
          <img
            src="/img1.jpg"
            alt=""
            className="rounded-tr-xl rounded-br-xl h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
