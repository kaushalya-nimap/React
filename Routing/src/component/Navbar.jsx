import React from 'react'
import {AppBar,Typography,Box, Toolbar, Button} from '@mui/material'
import {Link,BrowserRouter} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/products'>Products</a></li>
        </ul>
    </nav>
  )
}

export default Navbar