import { combineReducers, legacy_createStore as createStore } from 'redux';
import { ProfileReducer } from './ProfileReducer';
import { InboxReducer } from './InboxReducer'
import { HomeReducer } from './HomeReducer';
import { CommonElementsReducer } from './CommonElementsReducer';



let reducers = combineReducers({
    Home: HomeReducer,
    Inbox: InboxReducer,
    Profile: ProfileReducer,
    CommonElements: CommonElementsReducer
})

let store = createStore(reducers);

export default store;