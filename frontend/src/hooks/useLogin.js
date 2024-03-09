import React, { useState } from "react";
import { useUserContext } from "../context/userContext.jsx";
import { toast } from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const login = async ({ username, password }) => {
    try {
      setLoading(true);
      const success = handleInputs(username, password);
      if (!success) return;
      const res = await axios.post("/api/user/login", { username, password });
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputs(username, password) {
  if (!username || !password) {
    toast.error("Please fill up all the fields");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password is not long enough");
    return false;
  }
  return true;
}
