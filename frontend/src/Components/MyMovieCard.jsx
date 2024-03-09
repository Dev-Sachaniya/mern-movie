import React from "react";
import movieJPG from "../assets/movies.jpg";

const MyMovieCard = ({ movie }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex md:w-[25vw] md:h-[30vh] sm:w-[25vw] sm:h-[30vh]">
      <div className="w-1/2 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={movie.poster || movieJPG}
            alt="poster"
            className="h-full w-auto rounded-lg"
          />
        </div>
      </div>
      <div className="w-1/2 ml-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-md text-gray-600">Year: {movie.publishingYear}</p>
        <p className="text-md text-gray-600 mt-2">
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>
        <p className="text-md text-gray-600 mt-2">
          <span className="font-semibold">Rating:</span> {movie.rating}/10.0
        </p>
      </div>
    </div>
  );
};

export default MyMovieCard;
