import * as axios from "axios";
import React from "react";
import stylesheet from './Inbox.module.css'


class Inbox extends React.Component {

    constructor(props) {
        super(props);

        // load data at the start from db.json
        if (this.props.p.length === 0) {
            axios
                .get("http://localhost:3001/users")
                .then(response => {
                    this.props.callSetUsersActionCreator(response.data);
                });
        }
    }

    render() {

        // convert html to the js object

        let textAreaConverterHTMLtoJS = React.createRef();

        // unpacking props properties

        let p = this.props.p;

        // the JSX code is to return

        return (
            <div className={stylesheet.messages}>
                <div className={stylesheet.people}>
                    {p}
                </div>
            </div>
        )

    }
}

export default Inbox;