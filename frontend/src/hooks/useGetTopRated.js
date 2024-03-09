import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "../context/userContext";

const useGetTopRated = () => {
  const [loading, setLoading] = useState(false);
  const [topratedMovies, setTopRatedMovies] = useState([]);
  const { user } = useUserContext();
  useEffect(() => {
    const getTopRated = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/movie/top_rated");
        setTopRatedMovies(res.data);
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    getTopRated();
  }, [user]);
  return { loading, topratedMovies };
};

export default useGetTopRated;
