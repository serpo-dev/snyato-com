import React from 'react';
import stylesheet from './Comment.module.css';

let Comment = (props) => {
    return (
        <div className={stylesheet.Comment}>
            {props.comment.text}
        </div>
    )
}

export default Comment;