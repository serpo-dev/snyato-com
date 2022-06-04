import React from 'react'
import { Routes, Route } from 'react-router-dom'
import stylesheet from './Pages.module.css'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Add from './Add/Add'
import Inbox from './Inbox/Inbox'
import Profile from './Profile/Profile'


const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/search/*' element={<Discover />} />
                <Route path='/upload/*' element={<Add />} />
                <Route path='/im/*' element={<Inbox />} />
                <Route path='/user/*' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Pages;