import React from "react";
import stylesheet from './Inbox.module.css'
import ChatItem from './ChatItem/ChatItem'
import Message from "./Message/Message";


const Inbox = (props) => {

    let i = props.InboxItems.map((object, i) => <ChatItem key={i} name={object.name} id={object.id} />)
    let m = props.InboxMessages.map((message, i) => <Message key={i} id={message.id} text={message.text} />)

    return (
        <div className={stylesheet.messages}>
            <div className={stylesheet.people}>
                {i}
            </div>
            <div className={stylesheet.dialogs}>
                {m}
            </div>
        </div>
    )
}

export default Inbox;