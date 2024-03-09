import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserContext } from "../context/userContext";

const useGetMyMovies = () => {
  const [loading, setLoading] = useState(false);
  const [myMovies, setMyMovies] = useState([]);
  const { user } = useUserContext();

  const fetchMyMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/movie/yourmovies");
      setMyMovies(res.data);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const memoizedFetchMyMovies = useMemo(() => fetchMyMovies, []);

  useEffect(() => {
    if (user && myMovies.length === 0) {
      memoizedFetchMyMovies();
    }
  }, [user, myMovies.length, memoizedFetchMyMovies]);

  return { loading, myMovies, fetchMyMovies };
};

export default useGetMyMovies;
