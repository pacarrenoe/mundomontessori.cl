import React from "react";
import "./footer.css";
import {
  IconFacebook,
  IconInstragram,
  IconTiktok,
} from "../../pages/helper/Icons";

const Footer = () => {
  let urlFb = "https://www.facebook.com/profile.php?id=100069973238249";
  let urlIg = "https://www.instagram.com/camasinfantiles_montessori";
  let urlTk = "https://www.tiktok.com/@camas_montessori";
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
        <div className="social-links footer">
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
      </div>
    </footer>
  );
};

export default Footer;
