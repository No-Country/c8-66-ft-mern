import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  name: "",
  email: "",
  password: ""
}

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
const [eyes, setEyes] = useState(false)
const [eyesRepeat, setEyesRepeat] = useState(false)
  const createUser =(data)=>{
    const url = `url`;
    axios.post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => 
           alert("El usuario no se a podido crear")
      )
  }

const submit = (data)=>{
  // console.log(data);
  if (data.password == data.repeat_password) {
    createUser(data)
  }
 else{
  alert ("Las Contraseña deben ser iguales")
 }
 
}
const showPass = ()=>{
  if (eyes) {
    setEyes(false)
  }
 else{
  setEyes(true)
 }
}
const showRepeatPass = ()=>{
  if (eyesRepeat) {
    setEyesRepeat(false)
  }
 else{
  setEyesRepeat(true)
 }
}

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>
        ¡Bienvenido!
        </h2>
        <h3>
          Controla tus envios desde donde estés
        </h3>
        <section>
        <label htmlFor="name">Nombre</label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Nombre y Apellido"
        />
        </section>
        <section>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email" 
          id="email"
          placeholder="email"
        />
      </section>
      <section>
        <label htmlFor="password">Contraseña</label>
        <input {...register("password")} type={ eyes ? "text": "password"} id="password" placeholder="Password"/>
        <span onClick={showPass}>
       {eyes ?  <i class="fa-solid fa-eye">  </i> : <i class="fa-solid fa-eye-slash"></i>}
       </span>
     
      </section>
      <section>
        <label htmlFor="repeat_password">Repetir contraseña</label>
        <input {...register("repeat_password")} type={ eyesRepeat ? "text": "password"} id="repeat_password" placeholder="Repetir contraseña"/>
       <span onClick={showRepeatPass}>
       {eyesRepeat ?  <i class="fa-solid fa-eye">  </i> : <i class="fa-solid fa-eye-slash"></i>}
       </span>
     
      </section>
      <section>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Acepto términos y condiciones</label>
      </section>
      <button> Resgistrarme</button>
    </form>
  )
}

export default Register