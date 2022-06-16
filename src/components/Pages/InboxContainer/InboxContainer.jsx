import React from 'react';
import { oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator, setMessagesActionCreator } from '../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import Message from './Inbox/Message/Message';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        m: state.Inbox.messages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse(),
        currentValueOfTextArea: state.Inbox.currentValueOfTextArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        callAddNewMessageActionCreator: () => {
            dispatch(addNewMessageActionCreator())
        },
        callOneByOneCharachtersEnteringActionCreator: (desiredValue) => {
            dispatch(oneByOneCharachtersEnteringActionCreator(desiredValue))
        },
        callSetMessagesActionCreator: (setMessages) => {
            dispatch(setMessagesActionCreator(setMessages))
        }

    }
}

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox)

export default InboxContainer;