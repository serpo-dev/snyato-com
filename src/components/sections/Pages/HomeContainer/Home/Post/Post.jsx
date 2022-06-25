import React from 'react';
import stylesheet from './Post.module.css'
// import Comment from './Comment/Comment'
// import { AddCommentActionCreator } from './../../../../redux/PostReducer'

let Post = (props) => {

    // let textAreaConverterHTMLtoJS = React.createRef();

    // let comments = props.post.comments.map((comment, i) => <Comment key={i} comment={comment} />)



    // const callAddCommentActionCreator = () => {
    //     let commentProperties = {
    //         keyParentPost: props.key,
    //         desirableValue: textAreaConverterHTMLtoJS.current.value
    //     }
    //     props.dispatch(AddCommentActionCreator(commentProperties));
    //     textAreaConverterHTMLtoJS.current.value = '';
    // }

    return (
        <div className={stylesheet.Post}>
                    <img src={props.content} />
            {/* <br />
            <div>
                <p>Likes: </p>{props.post.likes}
            </div>
            <div>
                <p>Comments:</p>
                <br />
                <textarea
                    ref={textAreaConverterHTMLtoJS}
                    placeholder='Share your opinion here...'
                />
                <button onClick={callAddCommentActionCreator}>Send</button>
                <br />
                <div>
                    {comments}
                </div>
            </div> */}
        </div>
    )
}

export default Post;