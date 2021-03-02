import {renderEntireTree} from "../render";

let state = {
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
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ""
    renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state);
};

export default state;