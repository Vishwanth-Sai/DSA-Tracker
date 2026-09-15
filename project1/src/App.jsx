
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
function App() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#312E81]">
        <Navbar />
        <Sidebar />
      </div>
    </>
  )
}
export default App