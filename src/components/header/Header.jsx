import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/img/homeout/logo-principal.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Mundo Montessori</h1>
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`} role="navigation">
        <ul>
          <li>
            <a href="#productos" onClick={toggleMenu}>
              PRODUCTOS
            </a>
          </li>
          <li>
            <a href="#politicas" onClick={toggleMenu}>
              POLÍTICAS
            </a>
          </li>
          <li>
            <a href="#nosotros" onClick={toggleMenu}>
              NOSOTROS
            </a>
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

      <div
        className={`menu-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        role="button"
      >
        ☰
      </div>
    </header>
  );
};

export default Header;
