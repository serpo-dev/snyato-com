const SECTION_TOGGLE = 'SECTION-TOGGLE';
const SET_POSTS = 'SET-POSTS-HOME';
const NEXT_SLIDER_ARRAY = 'NEXT-SLIDER-ARRAY';
const PREVIOUS_SLIDER_ARRAY = 'PREVIOUS-SLIDER-ARRAY';
const INCREMENT_SUM = 'INCREMENT-SUM';

const initialState = {
    posts: [],
    startCount: 0,
    currentSection: 'Recommendations',
    sum: 0
}

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_SLIDER_ARRAY:
            return {
                ...state,
                startCount: state.startCount >= 0 ? state.startCount + 1 : state.startCount,
            }
        case PREVIOUS_SLIDER_ARRAY:
            return {
                ...state,
                startCount: state.startCount > 0 ? state.startCount - 1 : state.startCount,
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
        case INCREMENT_SUM:
            if (state.sum == 3 || state.sum == -3) {
                state.sum = 0;
            }
            return {
                ...state,
                sum: state.sum + action.valueOfSum
            }
        default:
            return state;
    }
}

export const switchSection = (sectionName) => ({ type: SECTION_TOGGLE, sectionName: sectionName })
export const setPosts = (newPosts) => ({ type: SET_POSTS, newPosts: newPosts })
export const updateSlider = () => ({ type: NEXT_SLIDER_ARRAY })
export const comebackSlider = () => ({ type: PREVIOUS_SLIDER_ARRAY })
export const incrementSum = (valueOfSum) => ({ type: INCREMENT_SUM, valueOfSum: valueOfSum })