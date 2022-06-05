import chats from './data/inboxItems.json';
import messages from './data/inboxMessages.json'

let state = {
    Inbox: {
        InboxItems: chats,
        InboxMessages: messages
    }
}

export default state; 