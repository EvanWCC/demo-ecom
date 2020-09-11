import React from 'react'
import '../css/Header.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
const Header = () => {
    return (
        <header>
            <div className="header__left">
                <DehazeIcon />
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Sign In</p>
                <Avatar />
            </div>
        </header>
    )
}

export default Header
