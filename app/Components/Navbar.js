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
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar