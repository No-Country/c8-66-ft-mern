import React from "react";
import { NavLink } from "react-router-dom";

const Getinto = () => {
  return (
    <div className="get-into">
      <section className="header-img">
        <img
          src="../img/hispanic-young-man-sitting-on-his-office-floor-while-holding-package-and-typing-on-the-laptop-to-check-customer-order-from-the-online-shop.png"
          alt=""
        />
      </section>
      <section className="container-info_get-into">
        <div className="container-icon-user">
          <div className="icon_user">
            <i className="fa-solid fa-user"></i>
          </div>
          <p>PERSONAS</p>
        </div>
        <div className="title-get_info">
          <h2>¡BIENVENIDO/A!</h2>
          <h3>Controlá tus envíos desde donde estés</h3>
        </div>
        <NavLink className="stl_button w8-btn" to="/login">
          <h3>Iniciar sesión</h3>
        </NavLink>
        <div className="hrs_styles">
          <hr color="##00000087" />
          <hr color="##00000087" />
        </div>
        <div>
          <h4 className="color-gray">¿Aún no tienes cuenta?</h4>
        </div>
        <NavLink className="stl_button w8-btn" to="/register">
          <h3>Crear cuenta</h3>
        </NavLink>
      </section>
    </div>
  );
};

export default Getinto;
