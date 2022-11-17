import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    localStorage.removeItem('token')
  }

  return (
           
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">Encomiendas</h1>
      </NavLink>
      <ul className="header__list">
        <li className="header__item">
          <NavLink
            to="/login"
          >
            <i>login</i>
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            to="/register">
            <i> register</i>
          </NavLink>
        </li>  
        <li className="header__item">
          <NavLink
            to="/shipping">
            <i> Envios Online</i>
          </NavLink>
        </li>  
        <li className="header__item">
          <NavLink
            to="/branchOffices">
            <i> Sucursales</i>
          </NavLink>
        </li>  
        <li className="header__item">
          <NavLink
            to="/questions">
            <i> Preguntas Frecuentes</i>
          </NavLink>
        </li>  
        <button onClick={handleClick} className='form-logout__btn'>Logout</button>
      </ul>
    </header>
  )
}

export default Header