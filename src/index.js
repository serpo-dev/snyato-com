import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { state, addMessage, singleCharacterEnter, defaultText, linkPair } from './state'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));



export let loadPage = (x) => {
    root.render(
        <BrowserRouter>
            <App inboxState={x} defaultText={defaultText} singleCharacterEnter={singleCharacterEnter} addMessage={addMessage} />
        </BrowserRouter>
    );
}

loadPage(state);

linkPair(loadPage);