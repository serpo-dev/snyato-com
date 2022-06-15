import React from 'react'
import './App.css'
import Actionbar from './components/Actionbar/Actionbar'
import Infobar from './components/Infobar/Infobar'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'
import bodybarTop from './bodybarTop.png'
import bodybarBottom from './bodybarBottom.png'
import logo from './logo.png'
import { NavLink } from 'react-router-dom'

function App(props) {
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
          <Pages store={props.store} />
          <Infobar />
        </div >
      </div>
    </div>
  );
}

export default App;