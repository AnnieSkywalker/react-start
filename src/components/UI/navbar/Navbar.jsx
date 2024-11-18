import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__links'>
            <Link to ="/about">about</Link>
            <Link to ='/posts'>posts</Link>
        </div>
    </div>
  )
}

export default Navbar