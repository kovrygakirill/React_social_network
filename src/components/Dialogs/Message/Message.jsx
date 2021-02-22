import React from 'react';
import mge from './Message.module.css';


const Message = (props) => {
    return (
        <div className={mge.message}>{props.message}</div>
    );
}

export default Message;