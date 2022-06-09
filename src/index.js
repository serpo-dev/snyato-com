import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));


export let loadPage = (state) => {

    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    );
}

loadPage(store.getState());

store.subscribe(() => {
    let state = store.getState();
    loadPage(state);
});