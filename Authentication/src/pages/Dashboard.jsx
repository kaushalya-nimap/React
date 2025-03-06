import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../slice/todoSlice'



function Dashboard() {
 
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('authToken');
    navigate('/login')
  }
  useEffect(()=>{
    dispatch(getTodos())
  },[])
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard