import React from 'react';
import dlog from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.messagePage.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );
    let messagesElements = props.messagePage.messagesData.map(message =>
        <Message message={message.message} id={message.id}/>
    );
    let newMessageBody = props.messagePage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendNewMessage()
    };
    let onChangeMessage = (e) => {
        let message = e.target.value;
        props.updateNewMessage(message)
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