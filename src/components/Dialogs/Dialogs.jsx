import React from 'react';
import dlog from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );
    let messagesElements = props.state.messagesData.map(message =>
        <Message message={message.message} id={message.id}/>
    );

    return (
        <div className={dlog.dialogs}>
            <div className={dlog.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={dlog.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;