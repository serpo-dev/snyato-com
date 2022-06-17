const SECTION_TOGGLE = 'SECTION-TOGGLE';
const SET_POSTS = 'SET-POSTS';


const initialState = {
    posts: [],
    currentSection: 'Recommendations'
}

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SECTION_TOGGLE:
            return {
                ...state,
                currentSection: action.sectionName
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.newPosts
            }
        default:
            return state;
    }
}

export const switchSection = (sectionName) => ({ type: SECTION_TOGGLE, sectionName: sectionName })
export const setPosts = (newPosts) => ({ type: SET_POSTS, newPosts: newPosts })