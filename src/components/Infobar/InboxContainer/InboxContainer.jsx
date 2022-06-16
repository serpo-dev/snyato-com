import React from 'react';
import { setUsersActionCreator } from '../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import ChatItem from './Inbox/ChatItem/ChatItem';
import { connect } from 'react-redux'


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

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox)

export default InboxContainer;