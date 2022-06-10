import React from "react";
import stylesheet from './Profile.module.css'


const Profile = (props) => {

    // convert HTML object to the JS language
    let textAreaConverterHTMLtoJS = React.createRef();

    // exctract props
    const posts = props.data.posts;
    const currentValueOfTextArea = props.data.currentValueOfTextArea;

    const callOneByOneCharachtersEnteringActionCreator = () => props.callbacks.callOneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) 
    const callAddNewPostActionCreator = () => props.callbacks.callAddNewPostActionCreator(textAreaConverterHTMLtoJS.current.value) 


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