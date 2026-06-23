import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import App from './App'
import Home from './components/page/Home'
import Search from './pages/Search'
import TV from './pages/TV'
import Movies from './pages/Movies'
import Sports from './pages/Sports'
import Myspace from './pages/Myspace'
import Categories from './pages/Categories'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='Search' element={<Search />} />
      <Route path='TV' element={<TV />} />
      <Route path='Movies' element={<Movies />} />
      <Route path='Sports' element={<Sports />} />
      <Route path='Categories' element={<Categories/>}/>
      <Route path='Myspace' element={<Myspace />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)