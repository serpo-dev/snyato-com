import React from "react";
import stylesheet from './Inbox.module.css'
import ChatItem from './ChatItem/ChatItem'
import SelectedChat from "./SelectedChat/SelectedChat";

const Inbox = () => {
    return (
        <div className={stylesheet.messages}>
            <div className={stylesheet.people}>
                <ChatItem name='Serega' id='1' />
                <ChatItem name='Lisa' id='2' />
                <ChatItem name='Masha' id='3' />
                <ChatItem name='Kate' id='4' />
                <ChatItem name='Artyom' id='5' />
            </div>
            <div className={stylesheet.dialogs}>
                <div>
                    <SelectedChat />
                </div>
            </div>
        </div>
    )
}

export default Inbox;