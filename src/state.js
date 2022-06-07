import chats from './redux/data/inboxItems.json';


export let store = {
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
    currentValueOfTextArea: `Write the thoughts you've always wanted to say...`,
    _reloadApp() { },
    subscriber(observer) {
        this._reloadApp = observer;
    },
    getState() {
        return this._state;
    },
    getDefaultText() {
        return this.currentValueOfTextArea;
    },
    dispatch(action) {
        if (action.type === 'ONE-BY-ONE-CHARACHTERS-ENTERING') {
            this.currentValueOfTextArea = action.desiredValue;
            this._reloadApp(this._state);
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let count = this._state.Inbox.InboxMessages.length;
            this._state.Inbox.InboxMessages[count] =
            {
                id: `${count + 1}`,
                text: `${action.desiredValue}`
            };
            console.log(action.desiredValue)
            console.log(this._state.Inbox.InboxMessages)
            this.currentValueOfTextArea = '';
            this._reloadApp(this._state);
            console.log(this._state)
        }
    }
}