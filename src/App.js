import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'

function App(props) {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <Pages InboxItems={props.InboxItems} InboxMessages={props.InboxMessages} />
      </div >
    </BrowserRouter>
  );
}

export default App;