import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContext.jsx";
import { MovieContextProvider } from "./context/movieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
