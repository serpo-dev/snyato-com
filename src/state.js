import chats from './redux/data/inboxItems.json';
import { InboxReducer } from './redux/InboxReducer';
import { ProfileReducer } from './redux/ProfileReducer';



export let store = {
    _state: {
        Inbox: {
            Person: chats,
            Messages: [
                {
                    id: 1,
                    text: "- It's not easy to live your own way."
                },
                {
                    id: 2,
                    text: "Because you can't blame anybody but yourself."
                },
                {
                    id: 3,
                    text: "- I don't want to be a burden! I want to be useful."
                }
            ]
        },
        Profile: {
            posts: [
                {
                    id: 1,
                    text: `Hey, world! I use a LC to save a moments dear to my heart.`,
                    comments: [
                        {
                            id: 1,
                            text: `Wow, it's so cool, dude. `
                        },
                        {
                            id: 2,
                            text: `Good luck!`
                        }
                    ]
                }
            ]
        }
    },
    _reloadApp() { },
    subscriber(observer) {
        this._reloadApp = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.Inbox = InboxReducer(this._state.Inbox, action);
        this._state.Profile = ProfileReducer(this._state.Profile, action);
        this._reloadApp(this._state);
    }
}