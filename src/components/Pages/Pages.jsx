import React from 'react'
import { Routes, Route } from 'react-router-dom'
import stylesheet from './Pages.module.css'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Add from './Add/Add'
import Inbox from './Inbox/Inbox'
import Profile from './Profile/Profile'


const Pages = (props) => {
    return (
        <div className={stylesheet.Pages}>
            <Routes>
                <Route path='/home/*' element={<Home />} />
                <Route path='/search/*' element={<Discover />} />
                <Route path='/upload/*' element={<Add />} />
                <Route path='/im/*' element={<Inbox
                    InboxItems={props.InboxItems}
                    InboxMessages={props.InboxMessages}
                    addMessage={props.addMessage} />} />
                <Route path='/user/*' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Pages;