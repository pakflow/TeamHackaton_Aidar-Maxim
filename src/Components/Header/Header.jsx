import React from 'react';
import logo from "../icons/logoH&M.png";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        <div className="users__navbar">
            navbar for users
        </div>
        <div className="navbar">
            <img style={{width: "100px", height: "auto"}} src={logo} alt="logo" />
        </div>
        <nav>
            <span>Женщины</span>
            <span>Divided</span>
            <span>Мужчины</span>
            <span>Малыши</span>
            <span>Дети</span>
            <span>H&M HOME</span>
            <span>Распродажа</span>
        </nav>
        </div>
    );
};

export default Header;