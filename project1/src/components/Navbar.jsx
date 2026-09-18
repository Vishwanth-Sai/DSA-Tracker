import React, { useState, useRef } from 'react'
import notification from '../assets/notification.webp'
import streak from '../assets/streak.webp'
import logo from '../assets/dsalogo.webp'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const Navref = useRef(null);

  useGSAP(() => {
    gsap.from(Navref.current, {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out"
    });
  }, []);
  const [lightMode, setLightMode] = useState(false)
  function handleMode() {
    setLightMode(!lightMode)
    document.documentElement.classList.toggle('light')
  }

  return (
    <nav ref={Navref} className="navbar">
      <ul className="flex items-center gap-6">
        <li>
          <a href="/">
            <img src={logo} alt="Logo" width="50" />
          </a>
        </li>
        <li><a href="/dashboard" className="theme-link">Dashboard</a></li>
        <li><a href="/Analytics" className="theme-link">Analytics</a></li>
        <li><a href="/profile" className="theme-link">Profile</a></li>
      </ul>

      <ul className="flex items-center gap-4">
        <li>
          <input type="text" placeholder=" Search..." className="search" />
        </li>

        <li>
          <img
            src={notification}
            alt="Notification"
            width="24"
            className={`cursor-pointer ${!lightMode ? 'invert' : ''}`}
          />
        </li>

        <li>
          <img
            src={streak}
            alt="Streak"
            width="24"
            className={`cursor-pointer ${!lightMode ? 'invert' : ''}`}
          />
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