import React from "react";
import stylesheet from './Profile.module.css';


const Profile = (props) => {

    // convert HTML object to the JS language

    let textAreaConverterHTMLtoJS = React.createRef();

    // exctract props

    let posts = props.posts;
    let currentValueOfTextArea = props.currentValueOfTextArea;

    const oneByOneCharachtersEnteringActionCreator = () => { props.oneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) }
    const addNewPostActionCreator = () => { props.addNewPostActionCreator() }

    // return JSX

    return (
        <div className={stylesheet.Prolile}>
            <div className={stylesheet.inputBox}>
                <textarea
                    onChange={oneByOneCharachtersEnteringActionCreator}
                    ref={textAreaConverterHTMLtoJS}
                    placeholder="What's the new?"
                    value={currentValueOfTextArea}
                />
                <button onClick={addNewPostActionCreator}>Publish</button>
            </div>
            <div>
                <br />
                {posts}
            </div>
        </div>
    )
}

export default Profile;