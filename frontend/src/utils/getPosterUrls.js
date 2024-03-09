const getPosterUrls = (movies) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p";
  const posterSize = "w500";
  const posterUrls = movies.map((movie) => {
    return `${posterBaseUrl}/${posterSize}${movie.poster_path}`;
  });
  return posterUrls;
};

export default getPosterUrls;
