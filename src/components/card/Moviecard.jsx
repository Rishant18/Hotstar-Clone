import React from "react";
import Data from "../../data/Data";
function Moviecard({image}) {
  return (
    <div className="min-w-45 h-65 bg-gray-800 rounded-lg scroll-m-1 hover:scale-105 transition duration-300 cursor-pointer">
    <img 
    src={image}
    alt="Movie Poster"
    className="w-full h-full object-cover "
    />
    
    </div>
  );
}

export default Moviecard;