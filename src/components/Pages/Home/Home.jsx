import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import stylesheet from './Home.module.css'

const Home = () => {
    return (
        <div>
            <a href='/feed'>For you</a>
            <br />
            <a href='/friends'>Following</a>
        </div>
    )
}

export default Home;