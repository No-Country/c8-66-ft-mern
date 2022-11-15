import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
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
        <p></p>
        <li className="header__item">
          <NavLink
            to="/register"
          >
            <i> register</i>
          </NavLink>
        </li>  
      </ul>
    </header>
  )
}

export default Header