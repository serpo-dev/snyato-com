import React from 'react'
import logo from './logo.png'
import stylesheet from './Header.module.css'


const Header = (props) => {
    return (
        <div className="Header">
            <div className={stylesheet.header}>
                <img src={logo} />
                <h1>Live Catcher</h1>
            </div>
        </div>
    )
}

export default Header;