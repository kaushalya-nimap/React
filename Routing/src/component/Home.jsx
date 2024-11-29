import React from 'react'
import {replace, useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const handlePage=()=>{
        navigate('/order-confirmed')
    }
  return (
    <>
    <div>Home</div>
    <button onClick={handlePage}>Place Order</button>
    </>
  )
}

export default Home