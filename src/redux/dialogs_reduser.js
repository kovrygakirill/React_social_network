const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_NEW_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 4, message: body})
            return state
        default:
            return state
    }
}

export const updateNewMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendNewMessageCreator = () => ({type: SEND_NEW_MESSAGE});

export default dialogsReducer;
