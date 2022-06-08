import React from 'react';
import stylesheet from './Post.module.css'
import Comment from './Comment/Comment'

let Post = (props) => {

    let comments = props.post.comments.map((comment, i) => <Comment key={i} comment={comment} />)

    return (
        <div className={stylesheet.Post}>
            <div>
                {props.post.text}
            </div>
            <br />
            <div>
                <p>Likes: </p>{props.post.likes}
            </div>
            <div>
                <p>Comments:</p>
                <br />
                <textarea />
                <br />
                <div>
                    {comments}
                </div>
            </div>
        </div>
    )
}

export default Post;