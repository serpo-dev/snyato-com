import { PostReducer } from "./PostReducer";

const ADD_NEW_POST = 'ADD-NEW-POST'

export let currentValueOfTextArea = '';

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let count = state.posts.length;
            let item = {
                id: `'${count}'`,
                text: `"${action.desiredValue}"`,
                comments: []
            }
            state.posts.push(item);
            return state;
        default:
            return state;
    }
}

export const AddNewPostActionCreator = (desiredValue) => ({ type: ADD_NEW_POST, desiredValue: desiredValue })