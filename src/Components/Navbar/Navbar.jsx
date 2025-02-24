import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/edwin.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpenIcon from "../../assets/menu_open.svg";
import menuCloseIcon from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu clicks and close the sidebar
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false); // Close sidebar when clicking on a link
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />

      {/* Mobile Menu Open Button */}
      <button className="nav-mob-open" onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
        <img src={menuOpenIcon} alt="Open Menu" />
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Mobile Menu Close Button */}
        <button className="nav-mob-close" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
          <img src={menuCloseIcon} alt="Close Menu" />
        </button>

        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" offset={50} href={`#${item}`} onClick={() => handleMenuClick(item)}>
              <p> {item.charAt(0).toUpperCase() + item.slice(1)} </p>
            </AnchorLink>
            {menu === item && <img src={underline} alt={item} />}
          </li>
        ))}
      </ul>

      {/* Connect With Me Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleMenuClick("contact")}>
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
