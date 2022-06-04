import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const InboxItems = [
    { name: 'Serega', id: '1' },
    { name: 'Lisa', id: '2' },
    { name: 'Masha', id: '3' },
    { name: 'Kate', id: '4' },
    { name: 'Artyom', id: '5' },
    { name: 'Erich', id: '6' }
]

const InboxMessages = [
    { id: '1', text: '- It\'s not easy to live your own way.' },
    { id: '2', text: 'Because you can\'t blame anybody but yourself.' },
    { id: '2', text: '- I don\'t want to be a burden! I want to be useful.' }
]

root.render(
    <App InboxItems={InboxItems} InboxMessages={InboxMessages} />
);
