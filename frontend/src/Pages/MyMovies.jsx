import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import MyMovieCard from "../Components/MyMovieCard";
import Pagination from "../Components/Pagination";
import useGetMyMovies from "../hooks/useGetMyMovies";
import AddMovieForm from "../Components/AddMovieForm";

const MyMovies = () => {
  // Sample movies data

  const { loading, myMovies } = useGetMyMovies();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = myMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  // Function to handle opening the add movie pop-up
  const openAddMoviePopup = () => {
    setIsAddMovieOpen(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 relative">
        <h1 className="text-3xl font-semibold text-center text-emerald-400">
          My Movies
        </h1>
        <div>
          <button
            onClick={openAddMoviePopup}
            className="bg-blue-500 absolute right-0 top-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Add Movie
          </button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4 mt-5 sm:flex-col md:flex-row">
          {currentMovies.map((movie) => (
            <MyMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="mt-5 sticky">
          <Pagination
            itemsPerPage={moviesPerPage}
            totalItems={myMovies.length}
            paginate={paginate}
          />
        </div>
      </div>
      {isAddMovieOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Pass necessary props to AddMovieForm */}
            <AddMovieForm onClose={() => setIsAddMovieOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMovies;
