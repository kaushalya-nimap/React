import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/dashboard',
    element:(<ProtectedRoute>
      <Dashboard/>
      </ProtectedRoute>)
  }
])
  
  return (
    <div>
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App