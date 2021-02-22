import React from 'react';
import dlog from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Maxh'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name?'},
    ];


   let dialogsElements = dialogsData.map(dialog =>
       <DialogItem name={dialog.name} id={dialog.id}/>
   );
    let messagesElements = messagesData.map(message =>
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