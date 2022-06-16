import React from "react";
import stylesheet from './Inbox.module.css'


const Inbox = (props) => {

    // unpacking props properties

    let p = props.p;

    // the JSX code is to return

    return (
        <div className={stylesheet.messages}>
            <div className={stylesheet.people}>
                {p}
            </div>
        </div>
    )

}

export default Inbox;