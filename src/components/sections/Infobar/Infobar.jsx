import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InboxContainer from './InboxContainer/InboxContainer'


const Infobar = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/im/*' element={
                    <InboxContainer
                        store={props.store}
                    />}
                />
            </Routes>
        </div>
    )
}

export default Infobar;