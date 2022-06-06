import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addMessage, singleCharacterEnter, defaultText } from './state'

const root = ReactDOM.createRoot(document.getElementById('root'));

export let loadPage = (state) => {
    root.render(
        <BrowserRouter>
            <App inboxState={state} defaultText={defaultText} singleCharacterEnter={singleCharacterEnter} addMessage={addMessage} />
        </BrowserRouter>
    );
}