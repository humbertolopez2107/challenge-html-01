import React from 'react';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <p>
          Deck
          <font className="dot">.</font>
        </p>
      </div>
      <ul className="header__options">
        <li>
          <a href="/">Technology</a>
        </li>
        <li>
          <a href="/">Ideas</a>
        </li>
        <li>
          <a href="/">Leadership</a>
        </li>
        <li>
          <a href="/">Video</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Finance</a>
        </li>
        <li>
          <a href="/">Entertaiment</a>
        </li>
      </ul>
      <div className="header__menu">
        <img src="/resources/imgs/menu (1).svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
