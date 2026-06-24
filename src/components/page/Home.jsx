import React from "react";
import Sidebar from '../sidebar/Sidebar';
import Herobanner from "../banner/Herobanner";
import Movierow from "../row/Movierow";


function Home() {
  return (
    <div className="bg-[#0a0c16] flex min-h-screen overflow-x-hidden">
      

      <div className=" flex-1 ml-20">
        <Herobanner />
         <Movierow title="Trending Now" />
         <Movierow title="Popular Movies" />
         <Movierow title="Sports" />
         <Movierow title="New Releases" />
       
       <footer/>
      </div>
    </div>
  );
}

export default Home;