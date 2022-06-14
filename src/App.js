import React from 'react'
import './App.css'
import Actionbar from './components/Actionbar/Actionbar'
import Infobar from './components/Infobar/Infobar'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'

function App(props) {
  return (
    <div className="appWrapper">
      <Navbar />
      <Actionbar />
      <Pages store={props.store} />
      <Infobar />
    </div >
  );
}

export default App;