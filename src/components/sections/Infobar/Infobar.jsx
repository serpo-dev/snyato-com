import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InboxContainer from './InboxContainer/InboxContainer'
import ProfileContainer from './ProfileContainer/ProfileContainer'


const Infobar = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/im' element={
                    <InboxContainer
                        store={props.store}
                    />}
                />
                <Route path='/profile' element={
                    <ProfileContainer
                        store={props.store}
                    />}
                />
            </Routes>
        </div>
    )
}

export default Infobar;