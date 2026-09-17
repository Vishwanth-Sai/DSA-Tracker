import React, { useState, useEffect } from 'react'
import notification from '../assets/notification.webp'
import streak from '../assets/streak.webp'
import logo from '../assets/dsalogo.webp'

const Navbar = () => {
  const [lightMode, setLightMode] = useState(false)
  function handleMode() {
    setLightMode(!lightMode)
    document.documentElement.classList.toggle('light')
  }
  return (
    <nav className="navbar">
        <ul className="flex items-center gap-6">
          <li>
            <a href="/">
              <img src={logo} alt="Logo" width="50" />
            </a>
          </li>
          <li><a href="/problemset" className="theme-link">Problem Set</a></li>
          <li><a href="/contest" className=" theme-link">Contest</a></li>
          <li><a href="/discuss" className=" theme-link">Discuss</a></li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <span><input type="text" placeholder=" Search..." className="search" /></span>
          </li>
          <li>
            <img src={notification} alt="Notification" width="24" className={`cursor-pointer ${!lightMode ? 'invert' : ''}`} />
          </li>
          <li>
            <img src={streak} alt="Streak" width="24" className={`cursor-pointer ${!lightMode ? 'invert' : ''}`} />
          </li>
          <li>
            <button onClick={handleMode} className="theme-button">
              {lightMode ? 'Dark Mode' : 'Light Mode'}
            </button>
          </li>
          <li>
            <button className="theme-button">Register</button>
            {' or '}
            <button className="theme-button">Login</button>
          </li>
        </ul>

      </nav>
  )
}

export default Navbar
