const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const SET_USERS = 'SET-USERS';
const SET_MESSAGES = 'SET-MESSAGES';

const initialState = {
    users: [],
    messages: [],
    currentValueOfTextArea: ''
};

export let InboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_BY_ONE_CHARACHTERS_ENTERING:
            return {
                ...state,
                currentValueOfTextArea: action.desiredValue
            }
        case ADD_NEW_MESSAGE:
            let count = state.messages.length;
            let item = {
                id: count + 1,
                text: state.currentValueOfTextArea
            };
            return {
                ...state,
                messages: [...state.messages, item],
                currentValueOfTextArea: ''
            }
        case SET_USERS:
            return {
                ...state,
                users: [].concat(...state.users, action.setUsers)
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: [].concat(...state.messages, action.setMessages)
            }
        default:
            return state;
    }
}


export let addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export let oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue });
export let setUsersActionCreator = (setUsers) => ({ type: SET_USERS, setUsers: setUsers });
export let setMessagesActionCreator = (setMessages) => ({ type: SET_MESSAGES, setMessages: setMessages });