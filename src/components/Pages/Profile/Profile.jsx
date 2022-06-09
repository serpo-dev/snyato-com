import React from "react";
import stylesheet from './Profile.module.css'
import Post from './Post/Post'
import { AddNewPostActionCreator } from "../../../redux/ProfileReducer";

const Profile = (props) => {

    let posts = props.Profile.posts.map((post, i) => <Post key={i} post={post} dispatch={props.dispatch} />).reverse()

    let textAreaConverterHTMLtoJS = React.createRef();

    const callAddNewPostActionCreator = () => {
        props.dispatch(AddNewPostActionCreator(textAreaConverterHTMLtoJS.current.value));
        textAreaConverterHTMLtoJS.current.value = ''
    }

    return (
        <div className={stylesheet.Prolile}>
            <div className={stylesheet.inputBox}>
                <textarea
                    ref={textAreaConverterHTMLtoJS}
                    placeholder="What's the new?"
                />
                <button onClick={callAddNewPostActionCreator}>Publish</button>
            </div>
            <div>{posts}</div>
        </div>
    )
}

export default Profile;