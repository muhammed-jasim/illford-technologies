import React from 'react'
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <div className='main-navbar-div'>
      <nav className='nav-bar'>
        <div className='logo-div'>
          <img src="/images/illford-logo.png" alt="" className='logo' />
        </div>
       <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar