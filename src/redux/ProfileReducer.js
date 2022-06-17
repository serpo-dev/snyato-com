const ADD_NEW_POST = 'ADD-NEW-POST';
const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';
const SET_POSTS = 'SET-POSTS';

const initialState = {
    posts: [],
    currentValueOfTextArea: ''
};


export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_BY_ONE_CHARACHTERS_ENTERING:
            return {
                ...state,
                currentValueOfTextArea: action.desiredValue
            }
        case ADD_NEW_POST:
            let count = state.posts.length;
            let item = {
                id: count,
                text: state.currentValueOfTextArea,
                comments: []
            }
            return {
                ...state,
                posts: [...state.posts, item],
                currentValueOfTextArea: ''
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.setPosts
            }
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })
export const oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue })
export const setPostsActionCreator = (setPosts) => ({ type: SET_POSTS, setPosts: setPosts })