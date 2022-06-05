import chats from './data/inboxItems.json';
// import messages from './data/inboxMessages.json'



let state = {
    Inbox: {
        InboxItems: chats,
        // InboxMessages: messages
        InboxMessages: [
            {
                id: "1",
                text: "- It's not easy to live your own way."
            },
            {
                id: "2",
                text: "Because you can't blame anybody but yourself."
            },
            {
                id: "3",
                text: "- I don't want to be a burden! I want to be useful."
            }
        ]
    }
}

export default state; 