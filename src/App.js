import React from 'react'
import './App.css'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Profile />
      <input />
    </div>
  );
}

export default App;