import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import App from './App'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className='App'>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </div>
);