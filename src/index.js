import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

// add message from the Inbox to the state database

let addMessage = (message) => {
    let count = state.Inbox.InboxMessages.length;
    state.Inbox.InboxMessages[count] = `, { id: "${count}", message: "${message}"}`
    alert({message});
}

root.render(
    <BrowserRouter>
        <App inboxState={state} />
    </BrowserRouter>
);

addMessage(App.addMessage);