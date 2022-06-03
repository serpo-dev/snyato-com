import React from 'react'
import stylesheet from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className={stylesheet.navbar}>
                <div>
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div>
                    <NavLink to='/search'>Discover</NavLink>
                </div>
                <div>
                    <NavLink to='/upload'>Add</NavLink>
                </div>
                <div>
                    <NavLink to='/im'>Inbox</NavLink>
                </div>
                <div>
                    <NavLink to='/user'>Profile</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;