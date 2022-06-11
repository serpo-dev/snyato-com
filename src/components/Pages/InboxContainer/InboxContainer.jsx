import React from 'react';
import { currentValueOfTextArea, oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator } from './../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import ChatItem from './Inbox/ChatItem/ChatItem';
import Message from './Inbox/Message/Message';
import StoreContext from '../../../StoreContext'


const InboxContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {

                    // converting data array of people and messages to required JSX state

                    const p = store.getState().Inbox.users.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />)
                    const m = store.getState().Inbox.messages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse()

                    let data = {
                        p: p,
                        m: m,
                        currentValueOfTextArea: currentValueOfTextArea
                    }



                    // get current value of the text area, give it to the action creator and then to the dispatch

                    const callOneByOneCharachtersEnteringActionCreator = (currentValueOfTextArea) => {
                        store.dispatch(oneByOneCharachtersEnteringActionCreator(currentValueOfTextArea));
                    }

                    const callAddNewMessageActionCreator = (currentValueOfTextArea) => {
                        store.dispatch(addNewMessageActionCreator(currentValueOfTextArea));
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
            }
        </StoreContext.Consumer>

    )
}

export default InboxContainer;