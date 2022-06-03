import React from 'react'
import stylesheet from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className={stylesheet.navbar}>
                <div>
                    <a href='/home'>Home</a>
                </div>
                <div>
                    <a href='/search'>Discover</a>
                </div>
                <div>
                    <a href='/upload'>Add</a>
                </div>
                <div>
                    <a href='/im'>Inbox</a>
                </div>
                <div>
                    <a href='/user'>Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;