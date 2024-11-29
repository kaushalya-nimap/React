import React,{Suspense} from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './component/Home'
//import About from './component/About'
import Navbar from './component/Navbar'
import OrderConfirmed from './component/OrderConfirmed'
import NoMathch from './component/NoMathch'
import Products from './component/Products'
import Featured from './component/Featured'
import New from './component/New'
import User from './component/DynamicRoute/User'
import UserDetails from './component/DynamicRoute/UserDetails'
const LazyAbout=React.lazy(()=>import ('./component/About') )

function App() {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/about',
      element:<LazyAbout/>
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
  //lazy component not required at initial load can be separate in bundle and download only when user navigates to that page this reduces main pages load time by avoiding the load of an heavy page
  return (
    <div>
      <Navbar/>
      <Suspense fallback='Loading...'>
      <RouterProvider router={router}/>  
      </Suspense>   
    </div>
  )
}

export default App