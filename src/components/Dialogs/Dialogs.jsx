import React from 'react';
import dlog from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={dlog.message}>{props.message}</div>
    );
}

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={dlog.dialog + " " + dlog.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Maxh'}
    ];

   let dialogsElements = dialogsData.map(dialog =>
       <DialogItem name={dialog.name} id={dialog.id}/>
   );


    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name?'},
    ];

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