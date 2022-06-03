import React from 'react'
import logo from './logo.png'
import stylesheet from './Header.module.css'


const Header = (props) => {
    return (
        <div className="Header">
            <h1 className={stylesheet.header}>
                <img src={logo} />
                <h1>{props.name}</h1>
            </h1>

        </div>
    )
}

export default Header;