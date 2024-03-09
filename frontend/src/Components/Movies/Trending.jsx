import React, { useMemo } from "react";
import useGetTrending from "../../hooks/useGetTrending";
import getPosterUrls from "../../utils/getPosterUrls";
import Loader from "../Loader";
import MovieCard from "../MovieCard";

const Trending = () => {
  const { loading, trendingMovies } = useGetTrending();
  const posterUrls = useMemo(() => {
    return getPosterUrls(trendingMovies);
  }, [trendingMovies]);

  return (
    <>
      {!trendingMovies && <Loader />}
      {trendingMovies.map((movie, idx) => (
        <MovieCard key={movie.id} poster={posterUrls[idx]} film={movie} />
      ))}
    </>
  );
};

export default Trending;
