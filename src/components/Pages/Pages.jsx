import React from 'react'
import { Routes, Route } from 'react-router-dom'
import stylesheet from './Pages.module.css'
import Home from './Home/Home'
import Discover from './Discover/Discover'
import Add from './Add/Add'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import InboxContainer from './InboxContainer/InboxContainer'


const Pages = (props) => {
    return (
        <div className={stylesheet.Pages}>
            <Routes>
                <Route path='/home/*' element={<Home />} />
                <Route path='/search/*' element={<Discover />} />
                <Route path='/upload/*' element={<Add />} />
                <Route path='/im/*' element={<InboxContainer
                    store={props.store}
                />} />
                {/* <Route path='/user/*' element={<ProfileContainer
                    store={props.store}
                />} /> */}
            </Routes>
        </div>
    )
}

export default Pages;