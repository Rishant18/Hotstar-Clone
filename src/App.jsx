import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/page/Home'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <>
    <Sidebar/>
    <Outlet/>
   
    </>
  )
}

export default App