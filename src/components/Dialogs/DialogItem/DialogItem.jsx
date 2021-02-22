import React from 'react';
import ditem from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={ditem.dialog}>
            <NavLink to={path} activeClassName={ditem.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;