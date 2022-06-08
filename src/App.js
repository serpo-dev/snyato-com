import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'

function App(props) {
  console.log(props)
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Pages
        state={props.state}
        dispatch={props.dispatch} />
    </div >
  );
}

export default App;