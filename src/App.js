import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Pages from './components/Pages/Pages'

function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Pages
        Person={props.inboxState.Inbox.Person}
        Messages={props.inboxState.Inbox.Messages}
        defaultText={props.defaultText}
        dispatch={props.dispatch} />
    </div >
  );
}

export default App;