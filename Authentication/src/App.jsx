import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'
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