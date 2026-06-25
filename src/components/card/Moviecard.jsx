import React from "react";

function MovieCard({ image, title }) {
  return (
    <div className="w-40 cursor-pointer hover:scale-105 transition  duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-xl"
      />
      <p className="text-white mt-2 text-sm">{title}</p>
    </div>
  );
}
export default MovieCard