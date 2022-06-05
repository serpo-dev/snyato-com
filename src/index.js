import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import InboxItems from './data/inboxItems.json';
import InboxMessages from './data/inboxMessages.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App InboxItems={InboxItems} InboxMessages={InboxMessages} />
);