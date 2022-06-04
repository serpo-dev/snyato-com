import React from "react";
import stylesheet from './Inbox.module.css'
import ChatItem from './ChatItem/ChatItem'
import SelectedChat from "./SelectedChat/SelectedChat";

const Inbox = () => {

    const inboxData = [
        { name: 'Serega', id: '1' },
        { name: 'Lisa', id: '2' },
        { name: 'Masha', id: '3' },
        { name: 'Kate', id: '4' },
        { name: 'Artyom', id: '5' },
        { name: 'Erich', id: '6' }
    ]

    const listItems = inboxData.map(object => {
        return (<ChatItem name={object.name} id={object.id} />)
    })

    return (
        <div className={stylesheet.messages}>
            <div className={stylesheet.people}>
                {listItems}
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