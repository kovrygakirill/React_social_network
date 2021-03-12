import React from 'react';
import dlog from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reduser";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );
    let messagesElements = props.state.messagesData.map(message =>
        <Message message={message.message} id={message.id}/>
    );
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendNewMessageCreator())
    };
    let onChangeMessage = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageCreator(message));
    };

    return (
        <div className={dlog.dialogs}>
            <div className={dlog.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={dlog.messages}>
                <textarea onChange={onChangeMessage} value={newMessageBody}/>
                <div className={dlog.buttonMessage}>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;