import React from "react";
import stylesheet from './Inbox.module.css'


const Inbox = (props) => {

    // convert html to the js object

    let textAreaConverterHTMLtoJS = React.createRef();

    // unpacking props properties

    let m = props.m;
    let currentValueOfTextArea = props.currentValueOfTextArea;

    const callOneByOneCharachtersEnteringActionCreator = () => { props.callOneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) };
    const callAddNewMessageActionCreator = () => { props.callAddNewMessageActionCreator() };

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

export default Inbox;