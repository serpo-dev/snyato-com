import React from 'react'
import logo from './logo.png'
import css from './Header.module.css'


const Header = (props) => {
    debugger;
    return (
        <div className="Header">
            <h1 className={css.header}>
                <img src={logo} />
                <h1>{props.name}</h1>
            </h1>

        </div>
    )
}

export default Header;