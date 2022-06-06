import chats from './redux/data/inboxItems.json';
import { loadPage } from './render';


// add message from the Inbox to the state database

export const RenderPage = (message) => {
    let count = state.Inbox.InboxMessages.length;
    state.Inbox.InboxMessages[count] = { id: `${count + 1}`, text: `${message}` }
    loadPage(state);
}



let state = {
    Inbox: {
        InboxItems: chats,
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