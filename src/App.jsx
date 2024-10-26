import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



const Data = createBrowserRouter([
  {path: '/',
    element : <Login/>
  },
  {path: '/signup',
    element : <Signup/>

  }
])

function App() {
  return (
    <RouterProvider router={Data}></RouterProvider>
  )
}

export default App