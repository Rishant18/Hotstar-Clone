import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/page/Home'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App