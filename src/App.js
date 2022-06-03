import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Pages />
    </div >
  );
}

export default App;