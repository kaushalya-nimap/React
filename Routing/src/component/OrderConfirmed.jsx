import React from 'react'
import {useNavigate} from 'react-router-dom'
function OrderConfirmed() {
    const navigate=useNavigate()

    const handlePage=()=>{
        navigate(-1)
    }
  return (
    <>
        <div>OrderConfirmed</div>
        <button onClick={handlePage}>Go Back</button>
    </>
    
  )
}

export default OrderConfirmed


