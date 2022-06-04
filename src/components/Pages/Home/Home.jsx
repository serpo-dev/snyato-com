import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import stylesheet from './Home.module.css'
import Recommendations from './Recommendations/Recommendations'
import Following from './Following/Following'

const Home = () => {
    return (
            <div>
                <p>hi</p>
                <NavLink to='/home/feed'>For you</NavLink>
                <br />
                <NavLink to='/home/friends'>Following</NavLink>
                <Routes>
                    <Route path='/feed' element={<Recommendations />} />
                    <Route path='/friends' element={<Following />} />
                </Routes>
            </div>
    )
}

export default Home;