import React from "react";
import { NavLink } from 'react-router-dom'
import stylesheet from './ChatItem.module.css'

const ChatItem = (props) => {
    let path = '/im/' + props.id

    return (
        <div className={stylesheet.item}>
            <NavLink to={path} className={(navData) => navData.isActive ? stylesheet.active : ''}>{props.name}</NavLink>
        </div>
    )
}

export default ChatItem;