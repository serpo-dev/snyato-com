import React from 'react'
import './App.css'
import Header from './Grids/Header'
import Navbar from './Grids/Navbar'
import Profile from './Grids/Profile'

function App() {
  return (
    <div className="appWrapper">
      <Header name={prompt('Write here your name please')} />
      <Navbar />
      <Profile />
      <input />
    </div>
  );
}

export default App;