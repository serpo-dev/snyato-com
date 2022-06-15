import React from 'react'
import './App.css'
import Actionbar from './components/Actionbar/Actionbar'
import Infobar from './components/Infobar/Infobar'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'
import Bodybar from './bodybar.png'

function App(props) {
  return (
    <div>
      <div className='bodybar'>
        <img src={Bodybar} />
      </div>
      <div className='appWrapperContainer'>
        <div className="appWrapper">
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