import React ,{useState,useEffect}from "react";
import Sidebar from '../sidebar/Sidebar';
import Herobanner from "../banner/Herobanner";
import Movierow from "../row/Movierow";


function Home() {

   const [movies, setMovies] = useState([]);
   const [selectedMovie, setSelectedMovie] = useState(null);

     useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data));
       }, []);
       


  return (
    
    <div className="bg-[#0a0c16] flex min-h-screen   overflow-x-hidden">
      

      <div className=" flex-1 ml-0 md:ml-20">
        <Herobanner />
         <Movierow onMovieClick={setSelectedMovie} title="Trending Now"  movies={movies.slice(0,20)}/>
         <Movierow onMovieClick={setSelectedMovie} title="Top 10 in India" movies={movies.slice(80,100)} />
         <Movierow onMovieClick={setSelectedMovie} title="Popular Movies" movies={movies.slice(20,40)} />
         <Movierow onMovieClick={setSelectedMovie} title="Sports" movies={movies.slice(40,60)} />
         <Movierow onMovieClick={setSelectedMovie} title="New Releases"  movies={movies.slice(60,80)}/>
       
       <footer/>
      </div>
      {selectedMovie && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
  onClick={() => setSelectedMovie(null)}
>
    <div
       className="bg-[#1b1f2b] rounded-2xl p-4 md:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
>
      <img
        src={selectedMovie.image?.original || selectedMovie.image?.medium}
        alt={selectedMovie.name}
        className="w-full h-56 md:h-72 object-cover rounded-xl"
      />

      <h2 className="text-white text-2xl md:text-3xl font-bold mt-4">
        {selectedMovie.name}
      </h2>

      <p className="text-gray-400 text-sm md:text-base mt-3 line-clamp-5">
        {selectedMovie.summary?.replace(/<[^>]*>/g, "")}
      </p>

      <button
       className="mt-5 w-full md:w-auto bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-500"
        onClick={() => setSelectedMovie(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
    
  );
}

export default Home;