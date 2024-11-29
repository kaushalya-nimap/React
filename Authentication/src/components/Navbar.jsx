import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href='/dashboard' >Dashboard</a></li>
          <li><a href='/login' >Login</a></li>
          <li><a href='/register' >Register</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar