export const ADD_NEW_COMMENT_TO_THE_POST = 'ADD-NEW-COMMENT-TO-THE-POST';

export let currentValueOfTextArea = '';

export let PostReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_COMMENT_TO_THE_POST:
            let count = state.posts[action.keyParentPost - 1].comments.length;
            let comment = {
                id: `${count + 1}`,
                text: `${action.desirableValue}`
            };
            state.posts[action.keyParentPost - 1].comments.push(comment);
            return state;
        default:
            return state;
    }

}

export const AddCommentActionCreator = (action) => ({
    type: ADD_NEW_COMMENT_TO_THE_POST,
    keyParentPost: action.keyParentPost,
    desirableValue: action.desirableValue
})