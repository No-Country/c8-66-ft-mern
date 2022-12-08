import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const validacion = (input) =>{
  let error = {}; 
  if(!input || isNaN(input) !== true){
      error.input = "Se requiere un numero de envío valido"
  }
  return error
}

const Search = () => {

    const [input, setInput] = useState("")
    const [error, setError]= useState({})
    const history = useNavigate();

    const handleInputChange = (e) =>{
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setError()
      setError(validacion(input))
      const errorValidador = validacion(input)
      if(Object.values(errorValidador).length !== 0){
        alert("Se requiere un numero de envío valido")
    }else{
      const url = `url`;
      axios
        .get(url, input)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) =>
        console.log(err))
        setInput('')
    }
    history("/DetailSearch");
 };


    const onSubmit = (data) => {
        console.log(data)
};


    return(
        <div className='search'>
                  <h3 className='titulo_input'>¿Quieres saber dónde esta tu envío?</h3>

          <div className="search1">
            <select className="search__input d_none">
              <option hidden selected>Tipo de envío</option>
              <option value= "enc">Encomienda</option>
              <option value= "sob" >Sobre</option>
              <option value= "cad">Carta documento</option>
              <option value= "sobi">Sobre internacional</option>
              <option value= "eco">E Commers</option>
            </select>
          <input  className="search__input br_button" 
            value= {input}
            type="text"
            placeholder='Numero seguimiento'
            onChange={(e)=>handleInputChange(e)}
          />
            <button className="search__button br_button"
                type="submit"
                onClick={(e)=>handleSubmit(e)}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
      </div>
    )
}

export default Search