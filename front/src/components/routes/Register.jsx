import axios from "axios";
import React, {useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/register2.css"

const defaultValues = {
  name: "",
  email: "",
  password: "",
  phone: ""
}

const Register = () => {
  const { register, handleSubmit,formState:{errors}, reset } = useForm();
  const [eyes, setEyes] = useState(false)
  const [eyesRepeat, setEyesRepeat] = useState(false)
  const [repeatPass, setrepeatPass] = useState(false)
  // const [respuestaEmail, setRespuestaEmail] = useState("")

  const createUser =(data)=>{



    const url = `http://localhost:4000/api/v1/users`;
    axios.post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err)
      // setRespuestaEmail(err.response.data.message)
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
 console.log(data);
}
const showPass = ()=>{
    setEyes(!eyes)
  
}
const showRepeatPass = ()=>{
    setEyesRepeat(!eyesRepeat)
}

  return (
    <div className="container_register">
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
          <label htmlFor="phone">Telefono</label>
          <input
            {...register("phone",{
              required: true
            })}
            type="text"
            id="phone"
            placeholder="telefono"
          />
          {errors.phone?.type === 'required' && <p>El telefono es requerido</p>}
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
          {/* <p>{respuestaEmail && respuestaEmail}</p> */}
        </section>
        <section>
          <label htmlFor="password">Contraseña</label>
          <input {...register("password",{
            required: true,
            pattern:/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,32}$/
          })} type={ eyes ? "text": "password"} id="password" placeholder="Password"/>
          <span onClick={showPass}>
        {eyes ?  <i className="fa-solid fa-eye">  </i> : <i className="fa-solid fa-eye-slash"></i>}
        </span>
        {errors.password?.type === 'required' && <p>Este campo es requerido</p>}
        {errors.password?.type === 'pattern' && <p className="small_letter">La contraseña debe tener Mínimo 8 caracteres, al menos una letra y un número</p>}
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
    </div>
  )
}

export default Register