import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Products() {
  return (
    <div>Products
        <nav>
            <Link to= 'featured'>Featured</Link>
            <br/>
            <Link to= 'new'>New</Link>
        </nav>
        <Outlet />        
    </div>
  )
}

export default Products