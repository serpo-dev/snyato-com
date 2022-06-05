import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state from './redux/state'
import { addMessage } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App inboxState={state} addMessage={addMessage} />
    </BrowserRouter>
);