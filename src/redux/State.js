import profileReducer from "./profile_reduser";
import dialogsReducer from "./dialogs_reduser";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello Bob', likeCount: 10},
                {id: 2, message: 'Hi Kirill', likeCount: 12},
            ],
            newPostText: "I'm programmer"
        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Kirill'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Maxh'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What is your name?'},
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._callSubscriber(this)
    },
};

export default store;
window.store = store;