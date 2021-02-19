import React from 'react';
import dlog from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={dlog.dialogs}>
            <div className={dlog.dialogsItem}>
                <div className={dlog.dialog + " " + dlog.active}>
                    Dimych
                </div>
                <div className={dlog.dialog}>
                    Kirill
                </div>
                <div className={dlog.dialog}>
                    Sveta
                </div>
                <div className={dlog.dialog}>
                    Max
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