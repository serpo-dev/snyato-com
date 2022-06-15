import React from 'react'
import stylesheet from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import addButton from './addButton.png'



const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul className={stylesheet.navbar}>
                <li>
                    <NavLink to='/home' className={(navData) => navData.isActive ? stylesheet.activeStateSmallButtons : stylesheet.smallButtons}>
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/search' className={(navData) => navData.isActive ? stylesheet.activeStateSmallButtons : stylesheet.smallButtons}>
                        <p>Discover</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/upload' className={stylesheet.addButton}>
                        <img src={addButton}></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/im' className={(navData) => navData.isActive ? stylesheet.activeStateSmallButtons : stylesheet.smallButtons}>
                        <p>Inbox</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user' className={(navData) => navData.isActive ? stylesheet.activeStateSmallButtons : stylesheet.smallButtons}>
                        <p>Profile</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;