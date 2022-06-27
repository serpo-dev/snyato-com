import React from 'react';
import { setUsersActionCreator } from '../../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import ChatItem from './Inbox/ChatItem/ChatItem';
import { connect } from 'react-redux'
import * as axios from "axios";


class InboxAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        axios
            .get("http://localhost:3001/users")
            .then(response => {
                this.props.setUsersActionCreator(response.data);
            });

    }


    render() {

        return (
            <Inbox
                p={this.props.p}
            />
        )

    }
}

let mapStateToProps = (state) => {
    return {
        p: state.Inbox.users.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />)
    }
}

const InboxContainer = connect(mapStateToProps, 
    {
        setUsersActionCreator
    }
    )(InboxAPIContainer)

export default InboxContainer;