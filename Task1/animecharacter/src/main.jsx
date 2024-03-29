import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Layout from './Layout.jsx'
import { AnimeProvider } from './Context/Context.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimeProvider>
    <RouterProvider router={router} />
  </AnimeProvider>,
)
