import React from 'react'
import logo from './logo.png'
import './Header.css'

const Header = (props) => {
    debugger;
    return (
        <div className='Header'>
            <h1 className='header'>
                <img src={logo} />
                <h1>{props.name}</h1>
            </h1>

        </div>
    )
}

export default Header;