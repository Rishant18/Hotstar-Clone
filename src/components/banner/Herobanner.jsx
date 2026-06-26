import React, { useEffect, useState } from "react";

function Herobanner() {
  const [shows, setShows] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setShows(data.slice(0, 8)));
  }, []);

  useEffect(() => {
    if (!shows.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % shows.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shows]);

  if (!shows.length) {
    return (
      <div className="w-full h-[75vh] bg-[#0a0c16] animate-pulse"></div>
    );
  }

  const show = shows[current];

  const next = () => {
    setCurrent((prev) => (prev + 1) % shows.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + shows.length) % shows.length);
  };

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={show.image?.original || show.image?.medium}
        alt={show.name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-16">

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold text-white">
            {show.name}
          </h1>

          <p className="mt-5 text-gray-300 line-clamp-4 text-lg">
            {show.summary?.replace(/<[^>]*>/g, "")}
          </p>

          <button className="mt-8 px-8 py-3 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition">
            ▶ Watch Now
          </button>

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {shows.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition ${
                  index === current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>

        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={previous}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white text-3xl hover:bg-black/80"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white text-3xl hover:bg-black/80"
      >
        ❯
      </button>
    </section>
  );
}

export default Herobanner;