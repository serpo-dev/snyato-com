import { combineReducers, legacy_createStore as createStore } from 'redux';
import { ProfileReducer } from './ProfileReducer';
import { InboxReducer } from './InboxReducer'

let reducers = combineReducers({
    Inbox: InboxReducer,
    Profile: ProfileReducer
})

let store = createStore(reducers);

export default store;