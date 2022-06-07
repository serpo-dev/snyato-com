import chats from './redux/data/inboxItems.json';


export let stack = {
    _state: {
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
    },
    defaultText: 'Write here what you want to say...',
    subscriber(observer) {
        this.Reload = observer;
    },
    singleCharacterEnter(updatedString) {
        this.defaultText = updatedString;
        this.Reload(this._state);
    },
    addMessage(message) {
        let count = this._state.Inbox.InboxMessages.length;
        this._state.Inbox.InboxMessages[count] = { id: `${count + 1}`, text: `${message}` };
        this.defaultText = '';
        this.Reload(this._state);
    },
    Reload() { },
    getState() {
        return this._state;
    },
    getDefaultText() {
        return this.defaultText;
    }
}