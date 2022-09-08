import React from 'react'
import { Routes, Route } from 'react-router-dom'
import stylesheet from './Pages.module.css'
import HomeContainer from './HomeContainer/HomeContainer'
import Discover from './Discover/Discover'
import Add from './Add/Add'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import InboxContainer from './InboxContainer/InboxContainer'
import Login from './Login/Login'


const Pages = () => {
    return (
        <div className={stylesheet.Pages}>
            <Routes>
                <Route path='/home/*' element={<HomeContainer />} />
                <Route path='/search/*' element={<Discover />} />
                <Route path='/upload/*' element={<Add />} />
                <Route path='/im/*' element={<InboxContainer />} />
                <Route path='/user/*' element={<ProfileContainer />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default Pages;