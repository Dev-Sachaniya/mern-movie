import React, { useEffect, useState } from "react";
import useGetPopular from "../../hooks/useGetPopular";
import getPosterUrls from "../../utils/getPosterUrls";
import MovieCard from "../MovieCard";
import Loader from "../Loader";

const Popular = () => {
  const { loading, popularMovies, fetchPopularMovies } = useGetPopular();
  const [posterUrls, setPosterUrls] = useState([]);

  useEffect(() => {
    if (popularMovies.length > 0) {
      setPosterUrls(getPosterUrls(popularMovies));
    }
  }, [popularMovies]);

  useEffect(() => {
    if (!popularMovies.length) {
      fetchPopularMovies();
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {popularMovies.map((movie, idx) => (
        <MovieCard key={movie.id} poster={posterUrls[idx]} film={movie} />
      ))}
    </>
  );
};

export default Popular;
