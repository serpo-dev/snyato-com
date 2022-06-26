const IS_FETCHING = 'IS-FETCHING';


const initialState = {
    isFetching: false
}

export const CommonElementsReducer = (state = initialState, action) => {
    switch (action.type) {

        // Loading.js

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;

        // Slider.js

        
    }
}

export const isFetchingToggle = (isFetching) => ({ type: IS_FETCHING, isFetching: isFetching })