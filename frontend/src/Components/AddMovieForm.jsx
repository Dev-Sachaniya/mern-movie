import React, { useState } from "react";
import convert from "../utils/convertToBase64";
import useCreateMovie from "../hooks/useCreateMovie";

const AddMovieForm = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    title: "",
    publishingYear: "",
    genre: "",
    rating: "",
    poster: "",
  });

  const { loading, createMovie } = useCreateMovie();

  const convertToBase64 = async (e) => {
    const base64 = await convert(e.target.files[0]);
    setInputs({ ...inputs, poster: base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMovie(inputs);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Movie Title"
          className="border-2 px-2 py-1"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="year">Publishing Year</label>
        <input
          type="number"
          id="year"
          placeholder="Enter Year"
          className="border-2 px-2 py-1"
          value={inputs.publishingYear}
          onChange={(e) =>
            setInputs({ ...inputs, publishingYear: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          placeholder="Enter Movie Genre"
          className="border-2 px-2 py-1"
          value={inputs.genre}
          onChange={(e) => setInputs({ ...inputs, genre: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="rating">Ratings</label>
        <input
          type="text"
          id="rating"
          placeholder="Enter Ratings"
          className="border-2 px-2 py-1"
          value={inputs.rating}
          onChange={(e) => setInputs({ ...inputs, rating: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="poster">Poster</label>
        <input type="file" id="poster" onChange={convertToBase64} />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-md border-none px-4 py-2"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className="bg-red-600 text-white rounded-md border-none px-4 py-2"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default AddMovieForm;
