import React from 'react';
import {sendNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage

    let onSendMessageClick = () => {
        let action = sendNewMessageCreator()
        props.store.dispatch(action)
    };

    let onChangeMessage = (message) => {
        let action = updateNewMessageCreator(message)
        props.store.dispatch(action);
    };

    return (
        <Dialogs messagePage={state} sendNewMessage={onSendMessageClick}
                 updateNewMessage={onChangeMessage}/>
    );
}

export default DialogsContainer;