import React from "react";
import './Header.scss';
import logo from '../logo/id-card.png';


const Header = () => {
  return (
    <header className="header">

    <div className="text-center pt-1 pb-5 container ">
      <img src={logo} alt="" width="250" className="logo" />
    </div>
    </header>
  );
};

export default Header;
