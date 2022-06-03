import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import stylesheet from './Home.module.css'
import Recommendations from './Recommendations/Recommendations'
import Following from './Following/Following'

const Home = () => {
    return (
            <div>
                <p>hi</p>
                {/* <NavLink to='/feed'>For you</NavLink>
                <br />
                <NavLink to='/friends'>Following</NavLink> */}
                <Routes>
                    <Route element={<Recommendations />} />
                    <Route  element={<Following />} />
                </Routes>
            </div>
    )
}

export default Home;