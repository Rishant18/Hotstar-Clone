import React ,{useRef}from 'react'
import Moviecard from "../card/Moviecard";

function Movierow({ title,movies}) {
  const rowRef = useRef(null);

  

  return (
    <div className="px-6 py-4 text-white w-full overflow-x-auto scrollbar-none">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex items-center w-full ">
       
        <div 
        ref={rowRef}
        className="overflow-x-auto  whitespace-nowrap scrollbar-hide ">
         <div className="flex gap-4 w-max">
            {movies.map((movie) => (
              <Moviecard
               key={movie.id}
               image={movie.image?.medium}
               title={movie.name}
           />
          ))}
        </div>
        </div>
       
      </div>
      </div>
   
);
}

export default Movierow;