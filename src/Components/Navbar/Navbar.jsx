import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/edwin.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpenIcon from "../../assets/menu_open.svg";
import menuCloseIcon from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <button className="nav-mob-open" onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
        <img src={menuOpenIcon} alt="Open Menu" />
      </button>
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="nav-mob-close" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
          <img src={menuCloseIcon} alt="Close Menu" />
        </button>

        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className={`anchor-link ${menu === item ? "active-link" : ""}`}
              offset={50}
              href={`#${item}`}
              onClick={() => handleMenuClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink 
          className={`anchor-link ${menu === "contact" ? "active-link" : ""}`}
          offset={50} 
          href="#contact" 
          onClick={() => handleMenuClick("contact")}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
