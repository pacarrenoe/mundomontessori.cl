import React from "react";
import "./footer.css"; // Importa el archivo de estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Información de la empresa</h3>
        <p>Dirección: Calle 123, Ciudad XYZ</p>
        <p>Teléfono: +1 234 567 890</p>
        <p>Email: info@empresa.com</p>
      </div>

      <div className="footer-section">
        <h3>Enlaces útiles</h3>
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Redes sociales</h3>
        <div className="social-links">
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
      </div>
    </footer>
  );
};

export default Footer;
