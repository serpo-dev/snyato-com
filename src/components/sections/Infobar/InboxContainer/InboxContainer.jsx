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
                this.props.callSetUsersActionCreator(response.data);
            });

    }


    render() {

        return (
            <Inbox
                p={this.props.p}
                callSetUsersActionCreator={this.props.callSetUsersActionCreator}
            />
        )

    }
}

let mapStateToProps = (state) => {
    return {
        p: state.Inbox.users.map((item, i) => <ChatItem key={i} name={item.name} id={item.id} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        callSetUsersActionCreator: (setUsers) => {
            dispatch(setUsersActionCreator(setUsers))
        }
    }
}

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(InboxAPIContainer)

export default InboxContainer;