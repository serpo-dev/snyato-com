import chats from './redux/data/inboxItems.json';

const ONE_BY_ONE_CHARACHTERS_ENTERING = 'ONE-BY-ONE-CHARACHTERS-ENTERING';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'


export let oneByOneCharachtersEnteringActionCreator = (desiredValue) => ({ type: ONE_BY_ONE_CHARACHTERS_ENTERING, desiredValue: desiredValue })
export let addNewMessageActionCreator = (desiredValue) => ({ type: ADD_NEW_MESSAGE, desiredValue: desiredValue })

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
    currentValueOfTextArea: '',
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
            this.currentValueOfTextArea = '';
            this._reloadApp(this._state);
        }
    }
}