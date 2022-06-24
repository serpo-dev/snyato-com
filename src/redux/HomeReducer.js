const SECTION_TOGGLE = 'SECTION-TOGGLE';
const SET_POSTS = 'SET-POSTS-HOME';
const NEXT_SLIDER_ARRAY = 'NEXT-SLIDER-ARRAY';

const initialState = {
    posts: [],
    startCount: 0,
    currentSection: 'Recommendations'
}

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_SLIDER_ARRAY:
            console.log(state.startCount)
            return {
                ...state,
                startCount: state.startCount + 2
            }
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
export const updateSlider = () => ({ type: NEXT_SLIDER_ARRAY })