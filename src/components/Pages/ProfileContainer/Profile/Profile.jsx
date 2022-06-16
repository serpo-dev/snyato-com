import React from "react";
import * as axios from 'axios';
import stylesheet from './Profile.module.css';


class Profile extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        axios
            .get("http://localhost:3001/posts")
            .then(response => {
                this.props.callSetPostsActionCreator(response.data);
            });
    }


    render() {

        // convert HTML object to the JS language

        let textAreaConverterHTMLtoJS = React.createRef();

        // exctract props

        let posts = this.props.posts;
        let currentValueOfTextArea = this.props.currentValueOfTextArea;

        const callOneByOneCharachtersEnteringActionCreator = () => { this.props.callOneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) }
        const callAddNewPostActionCreator = () => { this.props.callAddNewPostActionCreator() }

        // return JSX

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
}

export default Profile;