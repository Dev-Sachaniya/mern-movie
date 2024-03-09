import React from "react";
import useGetTopRated from "../../hooks/useGetTopRated";
import getPosterUrls from "../../utils/getPosterUrls";
import Loader from "../Loader";
import MovieCard from "../MovieCard";
import { useMemo } from "react";

const TopRated = () => {
  const { loading, topratedMovies } = useGetTopRated();
  const posterUrls = useMemo(() => {
    return getPosterUrls(topratedMovies);
  }, [topratedMovies]);
  return (
    <>
      {loading && <Loader />}
      {topratedMovies.map((movie, idx) => (
        <MovieCard key={movie.id} poster={posterUrls[idx]} film={movie} />
      ))}
    </>
  );
};

export default TopRated;
