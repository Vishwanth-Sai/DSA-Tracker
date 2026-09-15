import React from 'react'
import notification from '../assets/notification.webp'
import streak from '../assets/streak.webp'

const Navbar = () => {
  return (
    <nav className="Navbar h-16 transition-height w-full text-slate-300 transition-colors duration-300 bg-slate-900/70 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-4">
        <ul className="flex items-center gap-6">
          <li>
            <a href="/">
              <img src="/logo.svg" alt="Logo" />
            </a>
          </li>
          <li><a href="/problemset" className=" hover:text-white">Problem Set</a></li>
          <li><a href="/contest" className=" hover:text-white">Contest</a></li>
          <li><a href="/discuss" className=" hover:text-white">Discuss</a></li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <span><input type="text" placeholder=" Search..." className="rounded-2xl p-0.5 bg-slate-800 text-slate-300 placeholder:text-slate-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" /></span>
          </li>
          <li>
            <img src={notification} alt="Notification" width="24" className="cursor-pointer invert" />
          </li>
          <li>
            <img src={streak} alt="Streak" width="24" className="cursor-pointer invert" />
          </li>
          <li>
            <button className="hover:text-white cursor-pointer">Register</button>
            {' or '}
            <button className="hover:text-white cursor-pointer">Login</button>
          </li>
        </ul>

      </nav>
  )
}

export default Navbar
