import React from "react";

function Categories() {
  const browse = [
    "Sparks",
    "News",
    "TV",
    "Movies",
    "Sports",
  ];

  const studios = [
    "Hotstar Specials",
    "Disney+",
    "HBO Max",
    "Peacock",
    "Paramount+",
  ];

  const languages = [
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
  ];

  const PopularGenres = [
    "Romance",
    "Drama",
    "Reality",
    "Family",
    "Comedy",
    "Mythology",
  ];

  return (
    <div className="bg-[#0f1014] min-h-screen text-white p-8 pl-30  ">

      {/* browse */}
      <h2 className="text-xl font-bold mb-4" >Browse</h2>

      <div className="flex gap-4 overflow-x-auto mb-10 scrollbar-none ">
        {browse.map((item) => (
          <div
            key={item}
            className="min-w-60 h-30 rounded-xl bg-linear-to-r from-cyan-900 to-blue-900 flex items-end p-4 hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-3xl font-bold">{item}</h3>
          </div>
        ))}
      </div>

      {/* Studios */}
      <h2 className="text-xl font-bold mb-4">Studios</h2>

      <div className="flex gap-4 overflow-x-auto mb-10 scrollbar-none">
        {studios.map((item) => (
          <div
            key={item}
            className="min-w-62.5 h-32.5 rounded-xl bg-[#1c2230] flex items-center justify-center hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-2xl font-bold">{item}</h3>
          </div>
        ))}
      </div>

      {/* Languages */}
      <h2 className="text-xl font-bold mb-4">
        Popular Languages
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-none">
        {languages.map((item) => (
          <div
            key={item}
            className="min-w-55 h-30 rounded-xl bg-linear-to-r from-blue-600 to-orange-500 flex items-end p-4 hover:scale-105 transition cursor-pointer"
          >
            <div>
              <h3 className="text-2xl font-bold">{item}</h3>
              <p className="text-sm opacity-80">{item}</p>
            </div>
          </div>
        ))}
      </div>

      {/* popular generes */}
      <h2 className="text-xl font-bold mb-4 pt-10">Popular Genres</h2>

      <div className="flex gap-4  overflow-x-auto mb-10 scrollbar-none ">
        {PopularGenres.map((item) => (
          <div
            key={item}
            className="min-w-60 h-30 rounded-xl bg-linear-to-r from-cyan-900 to-blue-900 flex items-end p-4 hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-3xl font-bold">{item}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Categories;