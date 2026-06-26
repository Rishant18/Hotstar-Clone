import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div
     className={`hidden md:flex fixed left-0 top-0 h-screen bg-[#0a0c16]/90 backdrop-blur-md text-white transition-all duration-300 z-50 pl-7 ${
        open ? "w-52 opacity-100 translate-x-0" : "w-16"
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
    <div className="flex justify-center pt-6  ">
              <img
              src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
              alt="Hotstar Logo"
              className="w-12 object-contain fixed left-8 top-8 "
        />
           </div>
           
      
      <div className="flex flex-col gap-8 pt-35 pl-2">

        <Link to="/" className="flex items-center gap-3 text-2xlcursor-pointer ">
         <span > <i className="fa-solid fa-house"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >Home</span>}
        </Link>

        <Link to="/Search" className="flex items-center gap-3 cursor-pointer ">
          <span ><i className="fa-solid fa-magnifying-glass"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >Search</span>}
        </Link>

        <Link to="/TV" className="flex items-center gap-3 cursor-pointer ">
          <span ><i className="fa-solid fa-tv"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >TV</span>}
        </Link>

        <Link to="/Movies" className="flex items-center gap-3 cursor-pointer ">
          <span ><i className="fa-solid fa-clapperboard"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >Movies</span>}
        </Link>

         <Link to="/Sports" className="flex items-center gap-3 cursor-pointer ">
          <span ><i className="fa-solid fa-person-running"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >Sports</span>}
        </Link>

         <Link to="/Categories" className="flex items-center gap-3 cursor-pointer ">
          <span><i className="fa-solid fa-box"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >Categories</span>}
        </Link>

           <Link to="/Myspace" className="flex items-center gap-3 cursor-pointer  ">
          <span><i className="fa-solid fa-user"></i></span>
          {open && <span className="opacity-50 hover:opacity-100 " >My Space</span>}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;