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
    return (
        <div className={dlog.dialogs}>
            <div className={dlog.dialogsItem}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Kirill' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Max' id='4'/>
            </div>

            <div className={dlog.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='What is your name?'/>
            </div>
        </div>
    );
}

export default Dialogs;