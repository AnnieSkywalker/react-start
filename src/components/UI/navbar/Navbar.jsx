import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__links'>
            <Link className='navbar__link' to ="/about">about</Link>
            <Link className='navbar__link' to ='/posts'>posts</Link>
        </div>
    </div>
  )
}

export default Navbar