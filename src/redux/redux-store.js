import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { ProfileReducer } from './ProfileReducer';
import { InboxReducer } from './InboxReducer'
import { HomeReducer } from './HomeReducer';
import { CommonElementsReducer } from './CommonElementsReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    Home: HomeReducer,
    Inbox: InboxReducer,
    Profile: ProfileReducer,
    CommonElements: CommonElementsReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;