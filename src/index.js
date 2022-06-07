import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { stack } from './state'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));



export let loadPage = (state) => {
    root.render(
        <BrowserRouter>
            <App inboxState={state} defaultText={stack.getDefaultText()} singleCharacterEnter={stack.singleCharacterEnter.bind(stack)} addMessage={stack.addMessage.bind(stack)} />
        </BrowserRouter>
    );
}

loadPage(stack.getState());

stack.subscriber(loadPage);