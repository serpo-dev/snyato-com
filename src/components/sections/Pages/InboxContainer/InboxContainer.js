import React from 'react';
import { oneByOneCharachtersEnteringActionCreator, addNewMessageActionCreator, setMessagesActionCreator } from '../../../../redux/InboxReducer';
import Inbox from './Inbox/Inbox';
import Message from './Inbox/Message/Message';
import { connect } from 'react-redux'
import { InboxAPI } from '../../../../api/api';



class InboxAPIContainer extends React.Component {

    componentDidMount() {

        // load data at the start from db.json

        InboxAPI.getMessages()
            .then(data => {
                this.props.setMessagesActionCreator(data);
            });

    }

    render() {

        return (
            <Inbox
                m={this.props.m}
                currentTAValue={this.props.currentTAValue}
                addNewMessageActionCreator={this.props.addNewMessageActionCreator}
                oneByOneCharachtersEnteringActionCreator={this.props.oneByOneCharachtersEnteringActionCreator}
                setMessagesActionCreator={this.props.setMessagesActionCreator}
            />
        )

    }
}



let mapStateToProps = (state) => {
    return {
        m: state.Inbox.messages.map((message, i) => <Message key={i} id={message.id} text={message.text} />).reverse(),
        currentTAValue: state.Inbox.currentTAValue
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         callAddNewMessageActionCreator: () => {
//             dispatch(addNewMessageActionCreator())
//         },
//         callOneByOneCharachtersEnteringActionCreator: (desiredValue) => {
//             dispatch(oneByOneCharachtersEnteringActionCreator(desiredValue))
//         },
//         callSetMessagesActionCreator: (setMessages) => {
//             dispatch(setMessagesActionCreator(setMessages))
//         }

//     }
// }

const InboxContainer = connect(mapStateToProps, 
    {
        addNewMessageActionCreator,
        oneByOneCharachtersEnteringActionCreator,
        setMessagesActionCreator
    }
    )(InboxAPIContainer)

export default InboxContainer;