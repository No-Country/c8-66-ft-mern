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
       
          <NavLink
            to="/login">
               <div className="componente">
                  <h3>login</h3>
                </div>
          </NavLink>
        
        
          <NavLink
            to="/register">
              <div className="componente">
                <h3>register</h3>
                </div>
          </NavLink>

        
          <NavLink
            to="/shipping">
              <div className="componente">
                <h3>Envios Online</h3>
              </div>
            </NavLink>
        
        
          <NavLink
            to="/branchOffices">
              <div className="componente">
                <h3>Sucursales</h3>
              </div> 
          </NavLink>
          
        
          <NavLink
            to="/questions">
              <div className="componente">
                  <h3>Preguntas Frecuentes</h3>
              </div>    
          </NavLink>   

          <NavLink>
              <div className="componente">
                  <h3 onClick={handleClick}>Logout</h3>
              </div>    
          </NavLink>        
        </div>
        {/* <button  className="botonHeader">Logout</button> */}
      
    </header>
  )
}

export default Header