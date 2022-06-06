import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let loadPage = (state) => {
    root.render(
        <BrowserRouter>
            <App inboxState={state} />
        </BrowserRouter>
    );
}