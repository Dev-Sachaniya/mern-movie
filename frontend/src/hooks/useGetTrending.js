import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "../context/userContext";

const useGetTrending = () => {
  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { user } = useUserContext();
  const getTrendingMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/movie/trending");
      setTrendingMovies(res.data);
    } catch (error) {
      console.log(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user && trendingMovies.length == 0) {
      getTrendingMovies();
    }
  }, [user]);
  return { loading, trendingMovies, getTrendingMovies };
};

export default useGetTrending;
