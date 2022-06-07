import React from "react";
import stylesheet from './Inbox.module.css'
import ChatItem from './ChatItem/ChatItem'
import Message from "./Message/Message";
import { oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator } from './../../../state';


const Inbox = (props) => {



    // converting data array of people and messages to required JSX state

    let i = props.InboxItems.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />)
    let m = props.InboxMessages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse()

    // converting data array of people and messages to required JSX state

    let textAreaConverterHTMLtoJS = React.createRef();

    const callOneByOneCharachtersEnteringActionCreator = () => {
        props.dispatch(oneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value));
    }

    const callAddNewMessageActionCreator = () => {
        props.dispatch(addNewMessageActionCreator(textAreaConverterHTMLtoJS.current.value));
    }


    return (
        <div>
            <div className={stylesheet.messages}>
                <div className={stylesheet.people}>
                    {i}
                </div>
                <div className={stylesheet.dialogs}>
                    <div className={stylesheet.textarea}>
                        <textarea onChange={callOneByOneCharachtersEnteringActionCreator} ref={textAreaConverterHTMLtoJS} placeholder='Enter here your message' value={props.defaultText} />
                        <button onClick={callAddNewMessageActionCreator}>Send</button>
                    </div>
                    <div className={stylesheet.mItems}>
                        <br />
                        {m}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox;