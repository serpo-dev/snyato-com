import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import stylesheet from './Pages.module.css'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Add from './Add/Add'
import Inbox from './Inbox/Inbox'
import Profile from './Profile/Profile'

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/search' element={<Discover />} />
                <Route path='/upload' element={<Add />} />
                <Route path='/im' element={<Inbox />} />
                <Route path='/user' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages;