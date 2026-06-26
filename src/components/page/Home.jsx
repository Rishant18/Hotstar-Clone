import React ,{useState,useEffect}from "react";
import Sidebar from '../sidebar/Sidebar';
import Herobanner from "../banner/Herobanner";
import Movierow from "../row/Movierow";


function Home() {
   const [movies, setMovies] = useState([]);
     useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data));
       }, []);


  return (
    <div className="bg-[#0a0c16] flex min-h-screen overflow-x-hidden">
      

      <div className=" flex-1 ml-20">
        <Herobanner />
         <Movierow title="Trending Now"  movies={movies.slice(0,20)}/>
         <Movierow title="Top 10 in India" movies={movies.slice(80,100)} />
         <Movierow title="Popular Movies" movies={movies.slice(20,40)} />
         <Movierow title="Sports" movies={movies.slice(40,60)} />
         <Movierow title="New Releases"  movies={movies.slice(60,80)}/>
       
       <footer/>
      </div>
      
    </div>
    
  );
}

export default Home;