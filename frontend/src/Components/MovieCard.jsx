import React from "react";
import movie from "../assets/movies.jpg";

const MovieCard = ({ poster, film }) => {
  return (
    <div className="md:w-[200px] md:h-[220px] bg-[#00df9a] rounded-xl overflow-hidden  sm:h-[220px] sm:w-[200px]">
      <img
        src={poster}
        alt="placeholder"
        className="w-full h-[88%] object-cover rounded-xl"
      />
      <p className="text-black text-lg text-center">{film.title}</p>
    </div>
  );
};

export default MovieCard;
