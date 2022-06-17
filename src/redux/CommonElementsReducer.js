const IS_FETCHING = 'IS-FETCHING';


const initialState = {
    isFetching: false
}

export const CommonElementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state,
                isFetching: !action.isFetching
            }
        default:
            return state;
    }
}

export const isFetchingToggle = (isFetching) => ({ type: IS_FETCHING, isFetching: isFetching })