import React ,{useRef}from 'react'
import Moviecard from "../card/Moviecard";

function Movierow({ title,movies}) {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 py-4 text-white w-full overflow-auto scrollbar-none">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex items-center w-full ">
        <button onClick={scrollLeft} className="bg-gray-800 hover:bg-gray-600 text-white p-2 rounded-full mr-2">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div 
        ref={rowRef}
        className="overflow-auto scrollbar-none ">
         <div className="flex gap-4">
            {movies.map((movie) => (
              <Moviecard
               key={movie.id}
               image={movie.image?.medium}
               title={movie.name}
           />
          ))}
        </div>
        </div>
        <button onClick={scrollRight} className="bg-gray-800 hover:bg-gray-600 text-white p-2 rounded-full ml-2 mr-96 ">
          <i className  ="fa-solid fa-angle-right"></i>
        </button>
      </div>
      </div>
   
);
}

export default Movierow;