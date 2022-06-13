import React from 'react';
import { oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator, setUsersActionCreator, setMessagesActionCreator } from './../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import ChatItem from './Inbox/ChatItem/ChatItem';
import Message from './Inbox/Message/Message';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        p: state.Inbox.users.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />),
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
        callSetUsersActionCreator: (setUsers) => {
            dispatch(setUsersActionCreator(setUsers))
        },
        callSetMessagesActionCreator: (setMessages) => {
            dispatch(setMessagesActionCreator(setMessages))
        }

    }
}

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox)

export default InboxContainer;