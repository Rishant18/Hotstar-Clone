import React from "react";

function MovieCard({ image, title , onClick  }) {
  return (
   <div
   onClick={onClick} 
   className="group relative w-40 shrink-0 cursor-pointer transition hover:scale-110">

  <img
    src={image}
    alt={title}
    className="w-full h-60 rounded-xl object-cover"
  />

  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-end p-3">
    <p className="text-white font-semibold">
      {title}
    </p>
  </div>

</div>
  );
}
export default MovieCard