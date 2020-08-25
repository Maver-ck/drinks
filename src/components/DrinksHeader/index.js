import React from "react";
import drinksLogo from "../../resources/drinks-text.png";

const Header = () => {
  return (
    <h2 className="ui header">
      <img className="ui image" src={drinksLogo} alt="header-logo" />
    </h2>
  );
};

export default Header;
