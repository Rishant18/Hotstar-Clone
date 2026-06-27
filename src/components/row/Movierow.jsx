import React, { useRef } from "react";
import Moviecard from "../card/Moviecard";

function Movierow({ title, movies, onMovieClick }) {
  const rowRef = useRef(null);

  return (
    <div className="px-3 md:px-6 py-4 text-white">
      <h2 className="text-lg md:text-2xl font-bold mb-4">{title}</h2>

      <div
        ref={rowRef}
        className="overflow-x-auto overflow-hidden"
      >
        <div className="flex gap-3 md:gap-4 w-max py-2 ">
          {movies.map((movie) => (
            <Moviecard
              key={movie.id}
              image={movie.image?.medium}
              title={movie.name}
              onClick={() => onMovieClick(movie)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Movierow;