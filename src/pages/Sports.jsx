import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TV() {
  const [shows, setShows] = useState([]);
   const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setShows(data.slice(200, 250))); // different shows
  }, []);

  return (
    <div className="bg-black min-h-screen p-6 pl-30">
      <h1 className="text-white text-4xl font-bold mb-8">
       Sports
      </h1>

      <div className="grid grid-cols-7 gap-4">
        {shows.map((show) => (
          <div
            key={show.id}
            onClick={() => navigate(`/movie/${show.id}`)}
            className="cursor-pointer hover:scale-105 transition duration-300"
          >
            <img
              src={show.image?.medium}
              alt={show.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <p className="text-white mt-2 text-sm">
              {show.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TV;