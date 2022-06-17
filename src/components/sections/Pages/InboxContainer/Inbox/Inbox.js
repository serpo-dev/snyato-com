import React from "react";
import stylesheet from './Inbox.module.css'


const Inbox = (props) => {

    // convert html to the js object

    let textAreaConverterHTMLtoJS = React.createRef();

    // unpacking props properties

    let m = props.m;
    let currentTAValue = props.currentTAValue;

    const oneByOneCharachtersEnteringActionCreator = () => { props.oneByOneCharachtersEnteringActionCreator(textAreaConverterHTMLtoJS.current.value) };
    const addNewMessageActionCreator = () => { props.addNewMessageActionCreator() };

    // the JSX code is to return

    return (
        <div>
            <div className={stylesheet.textarea}>
                <textarea
                    onChange={oneByOneCharachtersEnteringActionCreator}
                    ref={textAreaConverterHTMLtoJS}
                    placeholder='Enter here your message'
                    value={currentTAValue} />
                <button onClick={addNewMessageActionCreator}>Send</button>
            </div>
            <div className={stylesheet.mItems}>
                <br />
                {m}
            </div>
        </div>
    )
}

export default Inbox;