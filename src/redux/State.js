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
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("State changed")
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };

        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
};

export default store;
window.store = store;