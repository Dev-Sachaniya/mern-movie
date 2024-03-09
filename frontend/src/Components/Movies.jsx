import React from "react";
import Trending from "./Movies/Trending";
import Popular from "./Movies/Popular";
import TopRated from "./Movies/TopRated";

import { UseMovieContext } from "../context/movieContext";

const Movies = () => {
  const { movie, setMovie } = UseMovieContext();
  return (
    <div className="h-[37vh] bg-white flex flex-col">
      <div className="text-black px-6 py-2 flex flex-row gap-8 justify-center">
        <p
          className="hover:underline cursor-pointer"
          onClick={() => setMovie("trending")}
        >
          Trending
        </p>
        <p
          className="hover:underline cursor-pointer"
          onClick={() => setMovie("toprated")}
        >
          Top Rated
        </p>
        <p
          className="hover:underline cursor-pointer"
          onClick={() => setMovie("popular")}
        >
          Popular
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around sm:gap-3 md:gap-0 sm:m-4 md:m-0">
        {movie === "trending" && <Trending />}
        {movie === "popular" && <Popular />}
        {movie === "toprated" && <TopRated />}
      </div>
    </div>
  );
};

export default Movies;
