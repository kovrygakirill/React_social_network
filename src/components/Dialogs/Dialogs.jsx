import React from 'react';
import dlog from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dlog.dialogs}>
            <div className={dlog.dialogsItem}>
                <div className={dlog.dialog + " " + dlog.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={dlog.dialog}>
                    <NavLink to='/dialogs/2'>Kirill</NavLink>
                </div>
                <div className={dlog.dialog}>
                    <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={dlog.dialog}>
                    <NavLink to='/dialogs/4'>Max</NavLink>
                </div>
            </div>

            <div className={dlog.messages}>
                <div className={dlog.message}>Hi</div>
                <div className={dlog.message}>How are you?</div>
                <div className={dlog.message}>What is your name?</div>
            </div>
        </div>
    );
}

export default Dialogs;