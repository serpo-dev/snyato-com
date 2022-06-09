import chats from './data/inboxItems.json';



const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export let currentValueOfTextArea = '';

const initialState = {
    Person: chats,
    Messages: [
        {
            id: 1,
            text: "- It's not easy to live your own way."
        },
        {
            id: 2,
            text: "Because you can't blame anybody but yourself."
        },
        {
            id: 3,
            text: "- I don't want to be a burden! I want to be useful."
        }
    ]
}

export let InboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_BY_ONE_CHARACHTERS_ENTERING:
            currentValueOfTextArea = action.desiredValue;
            return state;
        case ADD_NEW_MESSAGE:
            let count = state.Messages.length;
            let item = {
                id: count + 1,
                text: action.desiredValue
            };
            state.Messages.push(item);
            currentValueOfTextArea = '';
            return state;
        default:
            return state;
    }
}

export let oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue })
export let addNewMessageActionCreator = (desiredValue) => ({ type: ADD_NEW_MESSAGE, desiredValue: desiredValue })