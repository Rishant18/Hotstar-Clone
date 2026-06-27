import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 1000)));
  }, []);

  return (
    <div className="bg-black min-h-screen p-6 pl-30">
      <h1 className="text-white text-4xl font-bold mb-8">
        Movies & Shows
      </h1>

      <div className="grid grid-cols-7 gap-4">

        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="cursor-pointer hover:scale-105 transition duration-300"
          >
            <img
              src={movie.image?.medium}
              alt={movie.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <p className="text-white mt-2 text-sm">
              {movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;