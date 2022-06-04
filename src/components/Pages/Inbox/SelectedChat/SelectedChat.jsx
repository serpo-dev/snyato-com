import React from 'react'
import { Routes, Route } from 'react-router-dom'
import stylesheet from './SelectedChat.module.css'

const SelectedChat = () => {
    return (
        <div className={stylesheet.message}>
            <Routes>
                <Route path='/im/1' element={<p>1111111111111111111111111111111</p>} />
                <Route path='/im/2' element={<p>2222222222222222222222222222222</p>} />
                <Route path='/im/3' element={<p>3333333333333333333333333333333</p>} />
                <Route path='/im/4' element={<p>4444444444444444444444444444444</p>} />
                <Route path='/im/5' element={<p>5555555555555555555555555555555</p>} />
            </Routes>
        </div>
    )
}

export default SelectedChat;