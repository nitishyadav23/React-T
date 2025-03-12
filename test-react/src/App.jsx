import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'
import Admin from './Components/Admin'
import Nav from './Components/Nav'
import { CreateBrowserRouter } from "react-router-dom";
import Dashboard from './Components/Dashboard'
const router = CreateBrowserRouter(
  [
    {
      path:"/admin",
      element:<Admin />
    },
    {
      path:"/",
      element:<Dashboard />,
    },
    
    
  ]
)

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
