import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    localStorage.removeItem('token')
  }

  return (
           
    <header className="header">
      <NavLink to="/">
        <h1 className="header">Encomiendas</h1>
      </NavLink>
      <div className="contenedor">
        <div className="componente">
          <NavLink
            to="/login"
          >
            <i>login</i>
          </NavLink>
        </div>
        <div className="componente">
          <NavLink
            to="/register">
            <i> register</i>
          </NavLink>
        </div>  
        <div className="componente">
          <NavLink
            to="/shipping">
            <i> Envios Online</i>
          </NavLink>
        </div>  
        <div className="componente">
          <NavLink
            to="/branchOffices">
            <i> Sucursales</i>
          </NavLink>
        </div>  
        <div className="componente">
          <NavLink
            to="/questions">
            <i> Preguntas Frecuentes</i>
          </NavLink>
        </div>
        <button onClick={handleClick} className="botonHeader">Logout</button>
      </div>
    </header>
  )
}

export default Header