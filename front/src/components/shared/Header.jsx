import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleLogout, setToggleLogout] = useState();
  const handleClick = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    setToggleLogout(localStorage);
  }, [localStorage]);

  return (
    <header className="header">
      <div className="contenedor-links">
        <NavLink to="/">
          <h3>Inicio</h3>
        </NavLink>
        <NavLink to="/shipping">
          <h3>Envios Online</h3>
        </NavLink>

        <NavLink to="/branchOffices">
          <h3>Sucursales</h3>
        </NavLink>

        <NavLink to="/questions">
          <h3>Preguntas Frecuentes</h3>
        </NavLink>

        <NavLink className="people-link">
          <h3>Personas</h3>
          <i className="fa-solid fa-chevron-up"></i>
        </NavLink>
        {toggleLogout && toggleLogout.length === 0 ? (
          <NavLink to="/getInto" className="btn-get-into">
            <h3>Ingresar</h3>
          </NavLink>
        ) : (
          <NavLink>
            <h3 onClick={handleClick}>Logout</h3>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
