import React from 'react';
import { oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator, setMessagesActionCreator } from '../../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import Message from './Inbox/Message/Message';
import { connect } from 'react-redux'
import * as axios from "axios";



class InboxAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        axios
            .get("http://localhost:3001/messages")
            .then(response => {
                this.props.callSetMessagesActionCreator(response.data);
            });

    }

    render() {

        return (
            <Inbox
                m={this.props.m}
                currentValueOfTextArea={this.props.currentValueOfTextArea}
                callAddNewMessageActionCreator={this.props.callAddNewMessageActionCreator}
                callOneByOneCharachtersEnteringActionCreator={this.props.callOneByOneCharachtersEnteringActionCreator}
                callSetMessagesActionCreator={this.props.callSetMessagesActionCreator}
            />
        )

    }
}



let mapStateToProps = (state) => {
    return {
        m: state.Inbox.messages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse(),
        currentValueOfTextArea: state.Inbox.currentValueOfTextArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        callAddNewMessageActionCreator: () => {
            dispatch(addNewMessageActionCreator())
        },
        callOneByOneCharachtersEnteringActionCreator: (desiredValue) => {
            dispatch(oneByOneCharachtersEnteringActionCreator(desiredValue))
        },
        callSetMessagesActionCreator: (setMessages) => {
            dispatch(setMessagesActionCreator(setMessages))
        }

    }
}

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(InboxAPIContainer)

export default InboxContainer;