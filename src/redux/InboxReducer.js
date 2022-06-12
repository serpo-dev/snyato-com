import chats from './data/inboxItems.json';



const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const initialState = {
    users: chats,
    messages: [
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
    ],
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
        default:
            return state;
    }
}


export let addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export let oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue });