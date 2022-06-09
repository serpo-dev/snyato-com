import React from 'react'
import stylesheet from './Message.module.css'

const Message = (props) => {
    return (
        <div className={stylesheet.message}>
            {props.text}
        </div>
    )
}

export default Message;