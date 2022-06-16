import * as axios from "axios";
import React from "react";
import stylesheet from './Inbox.module.css'


class Inbox extends React.Component {

    constructor(props) {
        super(props);

        // load data at the start from db.json

        if (this.props.m.length === 0) {
            axios
                .get("http://localhost:3001/messages")
                .then(response => {
                    this.props.callSetMessagesActionCreator(response.data);
                });
        }
    }

    render() {

        // convert html to the js object

        let textAreaConverterHTMLtoJS = React.createRef();

        // unpacking props properties

        let m = this.props.m;
        let currentValueOfTextArea = this.props.currentValueOfTextArea;

        const callOneByOneCharachtersEnteringActionCreator = () => { this.props.callOneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) };
        const callAddNewMessageActionCreator = () => { this.props.callAddNewMessageActionCreator() };

        // the JSX code is to return

        return (
            <div>
                <div className={stylesheet.textarea}>
                    <textarea
                        onChange={callOneByOneCharachtersEnteringActionCreator}
                        ref={textAreaConverterHTMLtoJS}
                        placeholder='Enter here your message'
                        value={currentValueOfTextArea} />
                    <button onClick={callAddNewMessageActionCreator}>Send</button>
                </div>
                <div className={stylesheet.mItems}>
                    <br />
                    {m}
                </div>
            </div>
        )
    }
}

export default Inbox;