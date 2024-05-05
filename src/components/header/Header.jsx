import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/img/homeout/logo-principal.webp";
import {
  IconFacebook,
  IconInstragram,
  IconTiktok,
} from "../../pages/helper/Icons";

const Header = () => {
  let urlFb = "https://www.facebook.com/profile.php?id=100069973238249";
  let urlIg = "https://www.instagram.com/camasinfantiles_montessori";
  let urlTk = "https://www.tiktok.com/@camas_montessori";
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
            <a href="#products" onClick={toggleMenu}>
              PRODUCTOS
            </a>
          </li>
          <li>
            <a href="#policy" onClick={toggleMenu}>
              POLÍTICAS
            </a>
          </li>
          <li>
            <a href="#aboutUs" onClick={toggleMenu}>
              NOSOTROS
            </a>
          </li>
        </ul>
      </nav>

      <div className={`social-links ${isOpen ? "open" : ""}`}>
        <a href={urlFb} target="_blank" rel="noopener noreferrer">
          <IconFacebook />
        </a>
        <a href={urlIg} target="_blank" rel="noopener noreferrer">
          <IconInstragram />
        </a>
        <a href={urlTk} target="_blank" rel="noopener noreferrer">
          <IconTiktok />
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
