import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "../context/userContext";

const useGetPopular = () => {
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const { user } = useUserContext();

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/movie/popular");
      setPopularMovies(res.data);
    } catch (error) {
      console.log(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && popularMovies.length === 0) {
      fetchPopularMovies();
    }
  }, [user]);

  return { loading, popularMovies, fetchPopularMovies };
};

export default useGetPopular;
