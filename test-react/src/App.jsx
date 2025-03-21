
import './App.css'

import Admin from './Components/Admin'

import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
const router = createBrowserRouter(
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
