import React from 'react'
import './App.css'
import Actionbar from './components/sections/Actionbar/Actionbar'
import Infobar from './components/sections/Infobar/Infobar'
import Navbar from './components/sections/Navbar/Navbar'
import Pages from './components/sections/Pages/Pages'
import bodybarTop from './bodybarTop.png'
import bodybarBottom from './bodybarBottom.png'
import logo from './logo.png'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className='bodybar'>
        <img src={bodybarTop} />
        <img src={bodybarBottom} className='adaptImg' />
      </div>
      <div className='appWrapperContainer'>
        <div className="appWrapper">
          <NavLink to='/home' className='logo'>
            <img src={logo} />
          </NavLink>
          <Navbar />
          <Actionbar />
          <Pages />
          <Infobar />
        </div >
      </div>
    </div>
  );
}

export default App;