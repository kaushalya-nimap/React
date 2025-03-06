import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../slice/todoSlice'


function Login() {

  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
   const dispatch=useDispatch()
    const store=useSelector((state)=>state.todos)
    console.log(store)
    useEffect(()=>{
      dispatch(getTodos())
    },[])

  const handleLogin=(e)=>{
    e.preventDefault()
    const users=JSON.parse(localStorage.getItem('users'))||[]
    const user=users.find((user)=>user.username===username&&user.password===password)

    if(user){
      localStorage.setItem('authToken','12345');
      navigate('/dashboard')
    }
    else{
      alert('Invalid credentials')
    }

  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <input type='text'placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <br/>
      <input type='password'placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br/>
      <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login