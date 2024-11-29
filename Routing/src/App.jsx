import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import OrderConfirmed from './component/OrderConfirmed'
import NoMathch from './component/NoMathch'
import Products from './component/Products'
import Featured from './component/Featured'
import New from './component/New'
import User from './component/DynamicRoute/User'
import UserDetails from './component/DynamicRoute/UserDetails'

function App() {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'order-confirmed',
      element:<OrderConfirmed/>
    },
    {
      path:'*',
      element:<NoMathch/>
    },
    {
      path:'products',
      element:<Products/>,
      children:[
        {
          path:'featured',
          element:<Featured/>,
        },
        {
          path:'new',
          element:<New/>
        },
      ]      
    },
    {
      path:'user',
      element:<User/>,
      children:[
        {
          path:':userid',//dynamic routes 
          element:<UserDetails/>
        }
      ]
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