import { useState } from "react";
import { useUserContext } from "../context/userContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const useRegister = () => {
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const signup = async ({ username, email, password, confirmPassword }) => {
    try {
      const success = handleInputs(username, email, password, confirmPassword);
      if (!success) return;
      setLoading(true);
      const res = await axios.post("/api/user/signup", {
        username,
        email,
        password,
        confirmPassword,
      });
      if (res.data.error) {
        throw new Error(res.error);
      }
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useRegister;

function handleInputs(username, email, password, confirmPassword) {
  if (!username || !email || !password || !confirmPassword) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password does not match");
    return false;
  }
  if (password.length < 8) {
    toast.error("password must be atleast 8 character long");
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    toast.error("Please provide a valid email");
    return false;
  }
  return true;
}
