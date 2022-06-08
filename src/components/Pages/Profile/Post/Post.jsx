import React from 'react';
import stylesheet from './Post.module.css'

let Post = (props) => {
    
    return (
        <div className={stylesheet.Post}>
            {props.text}
        </div>
    )
}