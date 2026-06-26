import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-[#0a0c16]">
      <Sidebar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;