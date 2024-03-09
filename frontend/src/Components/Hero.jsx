import React from "react";
import movies from "../assets/movies.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <img
        src={movies}
        alt="poster"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="bg-black bg-opacity-50 text-white p-8 rounded-md text-center z-10">
        <p className="text-lg md:text-3xl leading-10">
          Embark on a cinematic journey with us. Explore a diverse collection of
          movies right at your fingertips. From timeless classics to the latest
          releases, we have something for everyone.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-center mt-8 space-y-4 md:space-y-0 md:space-x-5">
          <button className="w-full md:w-auto px-4 py-2 bg-[#00df9a] text-white rounded-md hover:bg-[#00c38b] transition duration-300">
            <Link to={"/mymovies"}>My Movies</Link>
          </button>
          <button
            onClick={() => alert("coming soon...")}
            className="w-full md:w-auto px-4 py-2 bg-[#00df9a] text-white rounded-md hover:bg-[#00c38b] transition duration-300"
          >
            Stream
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
