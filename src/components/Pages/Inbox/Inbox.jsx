import React from "react";
import stylesheet from './Inbox.module.css'
import ChatItem from './ChatItem/ChatItem'
import Message from "./Message/Message";

const Inbox = () => {

    const inboxData = [
        { name: 'Serega', id: '1' },
        { name: 'Lisa', id: '2' },
        { name: 'Masha', id: '3' },
        { name: 'Kate', id: '4' },
        { name: 'Artyom', id: '5' },
        { name: 'Erich', id: '6' }
    ]

    const messagesData = [
        { id: '1', text: '- It\'s not easy to live your own way.' },
        { id: '2', text: 'Because you can\'t blame anybody but yourself.' },
        { id: '2', text: '- I don\'t want to be a burden! I want to be useful.' }
    ]

    const listInboxItems = inboxData.map((object, i) => <ChatItem key={i} name={object.name} id={object.id} />)
    const listMessages = messagesData.map((message, i) => <Message key={i} id={message.id} text={message.text} />)

    return (
        <div className={stylesheet.messages}>
            <div className={stylesheet.people}>
                {listInboxItems}
            </div>
            <div className={stylesheet.dialogs}>
                {listMessages}
            </div>
        </div>
    )
}

export default Inbox;