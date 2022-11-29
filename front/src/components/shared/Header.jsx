import React from 'react'
import { NavLink } from "react-router-dom";
import "../../styles/header2.css"

import logo from "../../assets/logo.png"


const Header = () => {
  const handleClick = () => {
    localStorage.removeItem('token')
  }

  return (
    <header>
    <div className='nav_container'>
      <div>
        <NavLink
            to="/login"
        >
            <p>login</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/register">
          <p> register</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/shipping">
          <p> Envios Online</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/branchOffices">
          <p> Sucursales</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/questions">
          <p> Preguntas Frecuentes</p>
        </NavLink>
      </div>
      <div>
      <button onClick={handleClick} className='form-logout_btn'>Logout</button>
      </div>

    </div>
    <div className='logo_container'>
    <NavLink to="/">
        <img className='header_logo' src={logo} alt="logo"/>
      </NavLink>
    </div>
    


      
    </header>
  )
}

export default Header