import React, { useState } from "react";
import axios from "axios";
const useCreateMovie = () => {
  const [loading, setLoading] = useState(false);
  const createMovie = async ({
    title,
    publishingYear,
    genre,
    rating,
    poster,
  }) => {
    try {
      const create = await axios.post("/api/movie/create", {
        title,
        publishingYear,
        genre,
        rating,
        poster,
      });
      console.log(create.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { loading, createMovie };
};

export default useCreateMovie;
