import React from 'react'
import './App.css'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Pages from './Pages/Pages'

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;