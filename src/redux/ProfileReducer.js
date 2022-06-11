const ADD_NEW_POST = 'ADD-NEW-POST';
const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';

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
    ],
    currentValueOfTextArea: ''
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONE_BY_ONE_CHARACHTERS_ENTERING:
            {
                let stateCopy = { ...state };
                stateCopy.currentValueOfTextArea = { ...state.currentValueOfTextArea }
                stateCopy.currentValueOfTextArea = action.desiredValue;
                return stateCopy;
            }
        case ADD_NEW_POST:
            {
                let count = state.posts.length;
                let item = {
                    id: count,
                    text: state.currentValueOfTextArea,
                    comments: []
                }
                let stateCopy = { ...state };
                stateCopy.posts = [...state.posts];
                stateCopy.posts.push(item);
                stateCopy.currentValueOfTextArea = '';
                return stateCopy;
            }
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })
export const oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue })