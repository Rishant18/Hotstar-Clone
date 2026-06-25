import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {

    const [search,setsearch] =useState("")
    const [shows, setShows] = useState([]);
    const [popularShows, setPopularShows] = useState([]);
     const navigate = useNavigate();

        useEffect(() => {
    if (!search) {
      setShows([]);
      return;
    }

     fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((res) => res.json())
      .then((data) => setShows(data));
     }, [search]);
       
     useEffect(() => {
      fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => setPopularShows(data.slice(0, 30)));
}, []);

  return (
<>
    <div className="w-full flex justify-center py-6">
      <div className="relative w-125">
        
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

        <input
          value={search}
          onChange={(e)=> setsearch(e.target.value)}
          type="text"
          placeholder="Search Movies, shows and more"
          className="w-full bg-[#1a1d29] text-white pl-12 pr-4 py-3 rounded-xl outline-none border border-transparent focus:border-blue-500"
        />
      </div>
      
    </div>
   <div className="px-8 pl-30">
  <h2 className="text-white text-2xl font-bold mb-4">
    Popular Searches
  </h2>

   <div className="grid grid-cols-7 gap-4">
  {(!search ? popularShows : shows).map((item) => {
    const show = search ? item.show : item;

    return (
      <div
        key={show.id}
        onClick={() => navigate(`/movie/${show.id}`)}
        className="w-44 cursor-pointer hover:scale-105 transition"
      >
        <img
          src={show.image?.medium}
          alt={show.name}
          className="w-full h-64 object-cover rounded-xl"
        />

        <p className="text-white mt-2">
          {show.name}
        </p>
      </div>
    );
  })}
</div>
</div>

    </>
  );
}

export default SearchBar;