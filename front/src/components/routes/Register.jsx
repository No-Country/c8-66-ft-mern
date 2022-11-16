import axios from "axios";
import React, {useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  phone
}

const Register = () => {
  const { register, handleSubmit,formState:{errors}, reset } = useForm();
const [eyes, setEyes] = useState(false)
const [eyesRepeat, setEyesRepeat] = useState(false)
const [repeatPass, setrepeatPass] = useState(false)

  const createUser =(data)=>{


    const url = `localhost:4000/api/v1/users/`;
    axios.post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => 
           alert(err.message)
      )
  }

const submit = (data)=>{
  if (data.password == data.repeat_password) {
    createUser(data)
  }
 else{
  setrepeatPass(true)
 }
 delete data.repeat_password 
}
const showPass = ()=>{
    setEyes(!eyes)
  
}
const showRepeatPass = ()=>{
    setEyesRepeat(!eyesRepeat)
}

  return (
    <form onSubmit={handleSubmit(submit)} className='register_form'>
        <h2 className="title">
        ¡Bienvenido!
        </h2>
        <h3>
          Controla tus envios desde donde estés
        </h3>
        <h2>Registrarme</h2>
        <section>
        <label htmlFor="name">Nombre</label>
        <input
          {...register("name",{
            required: true
          })}
          type="text"
          id="name"
          placeholder="Nombre y Apellido"
        />
        {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
        </section>
        <section>
        <label htmlFor="phone">telefono</label>
        <input
          {...register("phone",{
            required: true
          })}
          type="text"
          id="phone"
          placeholder="telefono"
        />
        {errors.name?.type === 'required' && <p>El telefono es requerido</p>}
        </section>
        <section>
        <label htmlFor="email">Email</label>
        <input 
          {...register("email",{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })}
          type="text" 
          id="email"
          placeholder="email"
        />
        {errors.email?.type === 'required' && <p>El email es requerido</p>}
        {errors.email?.type === 'pattern' && <p>Debe ingresar un email valido</p>}
      </section>
      <section>
        <label htmlFor="password">Contraseña</label>
        <input {...register("password",{
          required: true
        })} type={ eyes ? "text": "password"} id="password" placeholder="Password"/>
        <span onClick={showPass}>
       {eyes ?  <i className="fa-solid fa-eye">  </i> : <i className="fa-solid fa-eye-slash"></i>}
       </span>
       {errors.password?.type === 'required' && <p>El password es requerido</p>}
      </section>
      <section>
        <label htmlFor="repeat_password">Repetir contraseña</label>
        {repeatPass ?  <p>las contraseñas no cinciden </p> : <p></p> }
        <input {...register("repeat_password",{
          required: true
        })} type={ eyesRepeat ? "text": "password"} id="repeat_password" placeholder="Repetir contraseña"/>
       <span onClick={showRepeatPass}>
       {eyesRepeat ?  <i className="fa-solid fa-eye">  </i> : <i className="fa-solid fa-eye-slash"></i>}
       </span>
       {errors.repeat_password?.type === 'required' && <p>Este campo es requerido</p>}
       {repeatPass ?  <p>las contraseñas no coinciden </p> : <p></p> }
      </section>
      <section className="register_checkbox">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Acepto términos y condiciones</label>
        {/* {errors.checkbox?.type === 'required' && <p>Acepte los términos y condiciones</p>} */}
      </section>
      <button className="login__btn"> Resgistrarme</button>
    </form>
  )
}

export default Register