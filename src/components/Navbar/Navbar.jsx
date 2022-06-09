import React from 'react'
import stylesheet from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className={stylesheet.navbar}>
                <div>
                    <NavLink to='/' className={(navData) => navData.isActive ? stylesheet.activeState : ""}>Home</NavLink>
                </div>
                <div>
                    <NavLink to='/search' className={(navData) => navData.isActive ? stylesheet.activeState : ""}>Discover</NavLink>
                </div>
                <div>
                    <NavLink to='/upload' className={(navData) => navData.isActive ? stylesheet.activeState : ""}>Add</NavLink>
                </div>
                <div>
                    <NavLink to='/im' className={(navData) => navData.isActive ? stylesheet.activeState : ""}>Inbox</NavLink>
                </div>
                <div>
                    <NavLink to='/user' className={(navData) => navData.isActive ? stylesheet.activeState : ""}>Profile</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;