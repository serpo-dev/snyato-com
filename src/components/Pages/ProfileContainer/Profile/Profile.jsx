import React from "react";
import stylesheet from './Profile.module.css'
import Post from './Post/Post'
import { currentValueOfTextArea, oneByOneCharachtersEnteringActionCreator, addNewPostActionCreator } from "../../../redux/ProfileReducer";

const Profile = (props) => {

    let posts = props.Profile.posts.map((post, i) => <Post key={i} text={post.text} dispatch={props.dispatch} />).reverse();

    let textAreaConverterHTMLtoJS = React.createRef();

    const callAddNewPostActionCreator = () => {
        props.dispatch(addNewPostActionCreator(textAreaConverterHTMLtoJS.current.value));
    };

    const calloneByOneCharachtersEnteringActionCreator = () => {
        props.dispatch(oneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value));
    };

    return (
        <div className={stylesheet.Prolile}>
            <div className={stylesheet.inputBox}>
                <textarea
                    onChange={calloneByOneCharachtersEnteringActionCreator}
                    ref={textAreaConverterHTMLtoJS}
                    placeholder="What's the new?"
                    value={currentValueOfTextArea}
                />
                <button onClick={callAddNewPostActionCreator}>Publish</button>
            </div>
            <div>
                <br />
                {posts}
            </div>
        </div>
    )
}

export default Profile;