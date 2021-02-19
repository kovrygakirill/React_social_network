import React from 'react';
import nbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={nbar.nav}>
            <div className={nbar.item}>
                <NavLink to='/profile' activeClassName={nbar.activeLink}>Profile</NavLink>
            </div>
            <div className={nbar.item}>
                <NavLink to='/dialog' activeClassName={nbar.activeLink}>Messages</NavLink>
            </div>
            <div className={nbar.item}>
                <a>News</a>
            </div>
            <div className={nbar.item}>
                <a>Music</a>
            </div>
            <div className={nbar.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;