import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="tituloFooter">Nuestras redes</h1>
      <div className="contenedor2">
        <div className="tarjeta1">
            <div>
          <i class="fa-brands fa-twitter"></i>
            </div>
          <h2 className="textoFooter">Twitter</h2>
        </div>
        <div className="tarjeta1">
            <div>
          <i class="fa-brands fa-facebook-f"></i>
            </div>
          <h2 className="textoFooter">Facebook</h2>
        </div>
        <div className="tarjeta1">
            <div>
          <i class="fa-brands fa-instagram"></i>
            </div>
          <h2 className="textoFooter">Instagram</h2>
        </div>
        <div className="tarjeta1">
            <div>
            <i class="fa-solid fa-phone"></i> 
            </div>
          <h2 className="textoFooter">Whatsapp</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
