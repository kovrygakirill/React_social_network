import React from 'react';
import nbar from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={nbar.nav}>
            <div className={nbar.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={`${nbar.item} ${nbar.active}`}>
                <a href='/dialog'>Messages</a>
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