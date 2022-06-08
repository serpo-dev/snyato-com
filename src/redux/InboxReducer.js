const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export let currentValueOfTextArea = '';

export let InboxReducer = (state, action) => {
    switch (action.type) {
        case ONE_BY_ONE_CHARACHTERS_ENTERING:
            currentValueOfTextArea = action.desiredValue;
            return state;
        case ADD_NEW_MESSAGE:
            let count = state.Messages.length;
            state.Messages[count] =
            {
                id: `${count + 1}`,
                text: `${action.desiredValue}`
            };
            currentValueOfTextArea = '';
            return state;
        default:
            return state;
    }
}

export let oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue })
export let addNewMessageActionCreator = (desiredValue) => ({ type: ADD_NEW_MESSAGE, desiredValue: desiredValue })