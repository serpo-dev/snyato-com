const ADD_NEW_POST = 'ADD-NEW-POST';
const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';

export let currentValueOfTextArea = '';

const initialState = {
    posts: [
        {
            id: 1,
            text: `Hey, world! I use a LC to save a moments dear to my heart.`,
            comments: [
                {
                    id: 1,
                    text: `Wow, it's so cool, dude. `
                },
                {
                    id: 2,
                    text: `Good luck!`
                }
            ]
        }
    ]
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_BY_ONE_CHARACHTERS_ENTERING:
            currentValueOfTextArea = action.desiredValue;
            return state;
        case ADD_NEW_POST:
            let count = state.posts.length;
            let item = {
                id: count,
                text: action.desiredValue,
                comments: []
            }
            state.posts.push(item);
            currentValueOfTextArea = '';
            return state;
        default:
            return state;
    }
}

export const addNewPostActionCreator = (desiredValue) => ({ type: ADD_NEW_POST, desiredValue: desiredValue })
export const oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue })