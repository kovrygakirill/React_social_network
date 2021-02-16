import React from 'react';
import hder from './Header.module.css';

const Header = () => {
    return (
        <header className={hder.header}>
            <img
                src='https://webcomicms.net/sites/default/files/clipart/170473/cool-logos-draw-170473-5461799.jpg'/>
        </header>
    );
}

export default Header;