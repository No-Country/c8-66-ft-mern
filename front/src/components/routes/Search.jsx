import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"




const validacion = (input) =>{
  console.log(input)
  let error = {}; 
  if(!input || isNaN(input)){
      error.input = "Se requiere un numero de envío valido"
  }
  console.log(error)
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
      const url = `http://localhost:4000/api/v1/status/${input}`;
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
          <div className="search1">
            <select className="search__input">
              <option hidden selected>Tipo de envío</option>
              <option value= "enc">Encomienda</option>
              <option value= "sob" >Sobre</option>
              <option value= "cad">Carta documento</option>
              <option value= "sobi">Sobre internacional</option>
              <option value= "eco">E Commers</option>
            </select>
          <input  className="search__input1 br_button" 
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