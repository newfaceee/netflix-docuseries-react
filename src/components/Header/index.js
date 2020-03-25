import React from "react";
import userIcon from "../../assets/img/user-icon.png";
import "./Header.scss";
import {Link} from 'react-router-dom';
// наверное надо добавить в пункт log in button с classname user--login, и дать еще ему состояние user--logout
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">
          Docuseries
        </Link>
      </h1>
      <div className="header__user">
        <img width="35" height="35" src={userIcon} alt="user-icon" />
        <span>Log In</span>
      </div>
    </header>
  );
};
export default Header;
