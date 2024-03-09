import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Movies from "../Components/Movies";
const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Theme */}
      <div className="flex flex-col md:h-[55vh] sm:h-auto">
        {/*Poster with text || Hero section*/}
        <Hero />
        {/* slider with bunch of options */}
      </div>
      <Movies />
    </>
  );
};

export default HomePage;
