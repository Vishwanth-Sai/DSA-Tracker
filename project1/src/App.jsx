
import React from 'react'
import Navbar from './components/Navbar'
import Hero1 from './components/hero1'
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="flex">
        <Hero1 />
        </div>
      </div>
    </>
  )
}
export default App