import React from 'react'
import { Routes, Route } from 'react-router-dom'
import stylesheet from './SelectedChat.module.css'

const SelectedChat = () => {
    return (
        <div className={stylesheet.message}>
            <Routes>
                <Route path='/1' element={<p>1111111111111111111111111111111</p>} />
                <Route path='/2' element={<p>2222222222222222222222222222222</p>} />
                <Route path='/3' element={<p>3333333333333333333333333333333</p>} />
                <Route path='/4' element={<p>4444444444444444444444444444444</p>} />
                <Route path='/5' element={<p>5555555555555555555555555555555</p>} />
                <Route path='/6' element={<p>6666666666666666666666666666666</p>} />
            </Routes>
        </div>
    )
}

export default SelectedChat;