const ADD_NEW_POST = 'ADD-NEW-POST'

let currentValueOfTextArea = '';

export const ProfileReducer = (state, action) => {
    switch (action.type) {

    }
}

export const callAddNewPostActionCreator = (desiredValue) => ({type: ADD_NEW_POST, desiredValue: desiredValue})