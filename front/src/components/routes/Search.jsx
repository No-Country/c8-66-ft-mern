import React from "react";


const Search = () => {
    return(
        <div className='search'>
          <div className="search1">
            <select className="search__input">
              <option hidden selected>Tipo de envío</option>
              <option value= "enc">Encomienda</option>
              <option value= "sob" >Sobre</option>
              <option value= "cad">Carta documento</option>
              <option value= "sobi">Sobre internacional</option>
              <option value= "eco">E Commers</option>
            </select>
          <input type="text" className="search__input br_button"  placeholder='Numero seguimiento'/>
        <button className="search__button br_button">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
      </div>
    )
}

export default Search