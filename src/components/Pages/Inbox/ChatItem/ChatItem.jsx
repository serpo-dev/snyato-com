import React from "react";
import { NavLink } from 'react-router-dom'
import stylesheet from './ChatItem.module.css'

const ChatItem = (props) => {

    return (
        <div className={stylesheet.item}>
            <NavLink to={`/im/${props.id}`} className={(navData) => navData.isActive ? stylesheet.active : ''}>{props.name}</NavLink>
        </div>
    )
}

export default ChatItem;