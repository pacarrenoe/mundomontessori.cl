import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="ruta-del-logo.png" alt="Logo" />
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#politicas">POLÍTICAS</a>
          </li>
          <li>
            <a href="#nosotros">NOSOTROS</a>
          </li>
          <li>
            <a href="#productos">PRODUCTOS</a>
          </li>
        </ul>
      </nav>

      <div className={`social-links ${isOpen ? "open" : ""}`}>
        <a href="link-facebook" target="_blank" rel="noopener noreferrer">
          FB
        </a>
        <a href="link-twitter" target="_blank" rel="noopener noreferrer">
          TW
        </a>
        <a href="link-instagram" target="_blank" rel="noopener noreferrer">
          IG
        </a>
      </div>

      <div className="menu-button" onClick={toggleMenu}>
        <span>☰</span>
      </div>
    </header>
  );
};

export default Header;
