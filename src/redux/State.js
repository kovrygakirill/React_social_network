let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello Bob', likeCount: 10},
            {id: 2, message: 'Hi Kirill', likeCount: 12},
        ],
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

export let addPost = (areatext) => {
    let newPost = {
        id: 3,
        message: areatext,
        likeCount: 0,
    };

    state.profilePage.postsData.push(newPost)
};

export default state;