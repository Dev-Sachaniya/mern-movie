import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export const UseMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState("trending");
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
