import React from 'react'
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className={CSS.navbar}>
                <div>Home</div>
                <div>Discover</div>
                <div>Add</div>
                <div>Inbox</div>
                <div>Profile</div>
            </div>
        </div>
    )
}

export default Navbar;