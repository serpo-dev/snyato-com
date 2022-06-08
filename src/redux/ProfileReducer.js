import { PostReducer } from "./PostReducer";

const ADD_NEW_POST = 'ADD-NEW-POST'

export let currentValueOfTextArea = '';

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let count = state.posts.length;
            let item = {
                id: count + 1,
                text: action.desiredValue,
                comments: []
            }
            state.posts.push(item);
            return state;
        default:
            PostReducer(state, action);
            return state;
    }
}

export const AddNewPostActionCreator = (desiredValue) => ({ type: ADD_NEW_POST, desiredValue: desiredValue })