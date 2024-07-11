import React from "react";
import backgroundImage from "../../assets/backgroundimage.jpg";
import { FaPlay, FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 text-white">
        <button className="py-2 px-4 rounded-full shadow-lg flex items-center text-pink-700 mb-4">
          <FaShoppingBag className="h-4 w-4 mr-2 text-pink-600" />
          Explore the world!
        </button>
        <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center text-black mb-4">
          Travel{" "}
          <span className="text-pink-600">
            top <br /> destination
          </span>
          <br /> of the world
        </h1>
        <p className="text-center mb-6 text-gray-500 font-medium">
          We always make our customers happy by <br /> providing <br /> as many
          choices as possible.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-pink-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 mb-2 md:mb-0 md:mr-2">
            Get started
          </button>
          <button className="border border-gray-300 py-2 px-4 rounded-full shadow-lg flex items-center text-black">
            <FaPlay className="h-4 w-4 mr-2 text-purple-900" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="relative flex-1 p-4 md:p-12">
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
             
          }}
        ></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="./hero.svg"
              alt="Destination 1"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="./hero1.svg"
              alt="Destination 2"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src="./hero2.svg"
              alt="Destination 3"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
