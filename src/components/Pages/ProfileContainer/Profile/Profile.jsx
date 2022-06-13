import React from "react";
import * as axios from 'axios';
import stylesheet from './Profile.module.css';


const Profile = (props) => {

    // convert HTML object to the JS language

    let textAreaConverterHTMLtoJS = React.createRef();

    // exctract props

    let posts = props.posts;
    let currentValueOfTextArea = props.currentValueOfTextArea;

    const callOneByOneCharachtersEnteringActionCreator = () => { props.callOneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) }
    const callAddNewPostActionCreator = () => { props.callAddNewPostActionCreator() }

    // load data at the start from db.json

    if (posts.length === 0) {
        axios
            .get("http://localhost:3001/users")
            .then(response => {
                props.callSetPostsActionCreator(response.data);
            });
    }


    return (
        <div className={stylesheet.Prolile}>
            <div className={stylesheet.inputBox}>
                <textarea
                    onChange={callOneByOneCharachtersEnteringActionCreator}
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