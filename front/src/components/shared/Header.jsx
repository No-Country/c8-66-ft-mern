import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navbar = useRef()
  const [toggleLogout, setToggleLogout] = useState();
  const userName = useSelector((state) => state.userLogin);

  const handleClick = () => {
    localStorage.removeItem("token");
  };
  useEffect(() => {
    setToggleLogout(localStorage);
  }, [localStorage]);

  const handleHamClick = () => {
    navbar.current.classList.toggle('header__nav--close')
  }
  // console.log(userName.name);
  return (
    <header className="header_app">
    <NavLink className='header__logo-navlink' to="/">
      <h1 className="header__logo">Encomienda</h1>
    </NavLink>
    <i className="fa-solid fa-bars header__menu-ham" onClick={handleHamClick}></i>
    <nav ref={navbar} className="header__nav header__nav--close">
    <i className="fa-solid fa-x" onClick={handleHamClick}></i>
    <h2 className="name_user">Hola {userName.name && userName.name}!</h2>
      <ul className="header__list">

        <li className="header__item">
          <NavLink 
            className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'}
            to="/shipping"
          >
<i className="fa-solid fa-boxes-packing"></i>
            Envios Online
          </NavLink>
        </li>
        <li className="header__item">
        <NavLink 
            className={({isActive}) => isActive ? 'header__navlink active-link' :'header__navlink'}
            to="/branchOffices"
          >
            <i className="fa-solid fa-store"></i>
            Sucursales
          </NavLink>
        </li>

  
        <li>
        <NavLink 
            className={({isActive}) => isActive ? 'header__navlink active-link ': 'header__navlink'} 
            to="/people-link"
          >
<i className="fa-solid fa-users"></i>            Personas
          </NavLink>
        </li>
        <li className="header__item">
            {toggleLogout && toggleLogout.length === 0 ? (
         <NavLink 
         className={({isActive}) => isActive ? 'header__navlink active-link ': 'header__navlink'} 
         to="/getInto"
       >
        <i className="fa-solid fa-right-to-bracket"></i>
         Ingresar
       </NavLink>
        ) : (
          <NavLink>
            <h3 onClick={handleClick}>Logout</h3>
          </NavLink>
        )}
        </li>
        <li>
        <NavLink 
            className={({isActive}) => isActive ? 'header__navlink active-link ': 'header__navlink'} 
            to="/questions"
          >
                 <i className="fa-solid fa-circle-question"></i>
            Preguntas Frecuentes
       
          </NavLink>
        </li>

      </ul>
    </nav>
  </header>
  );
};

export default Header;
