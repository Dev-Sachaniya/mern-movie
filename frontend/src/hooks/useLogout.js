import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useUserContext } from "../context/userContext.jsx";
import axios from "axios";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/user/logout");
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
