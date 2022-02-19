import React from "react";
import cls from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav className={cls.nav}>
        <div>
            <a href="profile">Profile</a>
        </div>
        <div>
            <a href="dialogs">Dialogs</a>
        </div>
        <div>
            <a href="news">News</a>
        </div>
        <div>
            <a href="music">Music</a>
        </div>
        <div>
            <a href="settings">Settings</a>
        </div>
    </nav>
    )
}

export default Navbar;