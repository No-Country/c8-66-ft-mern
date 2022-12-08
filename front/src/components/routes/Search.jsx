import React from "react";
import { useState  } from "react";
import axios from "axios";
import DetailSearch from "../routes/DetailSearch"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { setShipping } from "../../store/slices/shipping.slice";
// import { getShipping } from "../../redux/actions";




const validacion = (input) =>{
  let error = {}; 
  if(!input || isNaN(input)){
      error.input = "Se requiere un numero de envío valido"
  }
  console.log(error)
  return error
}

const Search = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")
    const [error, setError]= useState({})
    const [info, setInfo]= useState()
    const state = useSelector((state)=>state)
    // const [submit, setSubmit]=
    const history = useNavigate()

  

    
console.log("Soy info",info)

    const handleSubmit = (data) => {
      data.preventDefault();
            setError()
            setError(validacion(input))
            const errorValidador = validacion(input)
            if(Object.values(errorValidador).length !== 0){
              alert("Se requiere un numero de envío valido")
          }else{

            const url = `http://3.89.23.42:4000/api/v1/status/${input}`;
            axios.get(url).then((res)=>{
              dispatch(setShipping(res.data.shipping))
              setInfo(res.data)
              //  alert("buscando su envío")
            })
          
          //  .catch((err) =>console.log(err))
       }  
        history("/DetailSearch");
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
             onChange={(e)=>setInput(e.target.value)}
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