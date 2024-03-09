import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, Login, Signup } from "./Pages";
import { useUserContext } from "./context/userContext";
import { Toaster } from "react-hot-toast";
import MyMovies from "./Pages/MyMovies";

function App() {
  const { user } = useUserContext();

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/mymovies"
          element={user ? <MyMovies /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </>
  );
}

export default App;
