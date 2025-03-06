import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Register() {

const[username,setUsername]=useState('')
const[password,setPassword]=useState('')
const navigate=useNavigate()

  const handleRegister=(e)=>{
    e.preventDefault();

    const users=JSON.parse(localStorage.getItem('users'))||[]
    const userExists=users.find((user)=>user.username===username)

    if(userExists)
    {
      alert('User already exists,Please login')
     navigate('login')
    }
    else
    {
      users.push({username,password})
      localStorage.setItem('users',JSON.stringify(users))
      alert('Registration Successful,please login')
      navigate('/login')
    }
  }


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister} >
        <input type='text' placeholder='Username'value={username} onChange={(e)=>setUsername(e.target.value)} />
        <br/>
        <input type='text' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register