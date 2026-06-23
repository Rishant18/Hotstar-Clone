import React from "react";
import Sidebar from '../sidebar/Sidebar';
import Herobanner from "../banner/Herobanner";
import Movierow from "../row/Movierow";


function Home() {
  return (
    <div className=" flex bg-black min-h-screen overflow-x-hidden">
      

      <div className=" flex-1 ml-20">
        <Herobanner />
         <Movierow title="Trending Now" />
         <Movierow title="Popular Movies" />
         <Movierow title="Sports" />
         <Movierow title="New Releases" />
       
      </div>
    </div>
  );
}

export default Home;