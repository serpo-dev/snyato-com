import React from 'react';
import { currentValueOfTextArea, oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator } from './../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import ChatItem from './Inbox/ChatItem/ChatItem';
import Message from './Inbox/Message/Message';

const InboxContainer = (props) => {

    // converting data array of people and messages to required JSX state


    const p = props.store.getState().Inbox.users.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />)
    const m = props.store.getState().Inbox.messages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse()

    let data = {
        p: p,
        m: m,
        currentValueOfTextArea: currentValueOfTextArea
    }

    // converting data array of people and messages to required JSX state


    const callOneByOneCharachtersEnteringActionCreator = (currentValueOfTextArea) => {
        props.store.dispatch(oneByOneCharachtersEnteringActionCreator(currentValueOfTextArea));
    }

    const callAddNewMessageActionCreator = (currentValueOfTextArea) => {
        props.store.dispatch(addNewMessageActionCreator(currentValueOfTextArea));
    }

    const callbacks = {
        callOneByOneCharachtersEnteringActionCreator: callOneByOneCharachtersEnteringActionCreator,
        callAddNewMessageActionCreator: callAddNewMessageActionCreator
    }



    return (

        <Inbox
            data={data}
            callbacks={callbacks}
        />

    )
}

export default InboxContainer;