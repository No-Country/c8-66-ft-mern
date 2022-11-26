import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [eyes, setEyes] = useState(false);
  const [eyesRepeat, setEyesRepeat] = useState(false);
  const [repeatPass, setrepeatPass] = useState(false);
  const [respuestaEmail, setRespuestaEmail] = useState();
  const [termsAndConditons, setTermsAndConditons] = useState()
  const history = useNavigate();

  const createUser = (data) => {
    const url = `http://localhost:4000/api/v1/users`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch(
        (err) => {
          console.log(err.response.data.message)
          if (err.response.data.message==="llave duplicada viola restricción de unicidad «users_phone_key»") {
          setRespuestaEmail('Este telefono ya existe')}
          else if(err.response.data.message==='llave duplicada viola restricción de unicidad «users_email_key'){
            setRespuestaEmail('Este correo ya existe')
          }
          else {
            setRespuestaEmail()
          }
        
  })
    history("/");
  };

  const submit = (data) => {

    if (data.password == data.repeat_password && termsAndConditons) {
      createUser(data);
    } else {
      setrepeatPass(true);
    }
    
    delete data.repeat_password;
  };
  const showPass = () => {
    setEyes(!eyes);
  };
  const showRepeatPass = () => {
    setEyesRepeat(!eyesRepeat);
  };
const handleCheck =()=>{
  setTermsAndConditons(event.target.value);
}
console.log(termsAndConditons);

  return (
    <form onSubmit={handleSubmit(submit)} className="get-into">
      <section className="header-img">
        <img src="../img/young.png" alt="" />
      </section>

      <section className="container-info_get-into">
        <div className="container-icon-user">
          <div className="icon_user">
            <i className="fa-solid fa-user"></i>
          </div>
          <p>PERSONAS</p>
        </div>

        <div className="title-get_info">
          <h2>¡BIENVENIDO/A!</h2>
          <h3>Controlá tus envíos desde donde estés</h3>
        </div>

        <section className="container-input_form">
          <section>
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              id="name"
              placeholder="NOMBRE Y APELLIDO"
            />
            {errors.name?.type === "required" && <p className='alert-p'>El nombre es requerido</p>}
          </section>
          <section >
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
              type="text"
              id="email"
              placeholder="CORREO ELECTRÓNICO"
            />
            {errors.email?.type === "required" && <p className='alert-p'>El email es requerido</p>}
            {errors.email?.type === "pattern" && (
              <p className='alert-p'>Debe ingresar un email valido</p>
            )}
            <p className='alert-p'>{respuestaEmail && 'este Email ya existe'}</p>
          </section>
          <section>
            <input
              {...register("phone", {
                required: true,
              })}
              type="text"
              id="phone"
              placeholder="TELÉFONO"
            />
            {errors.phone?.type === "required" && (
              <p className='alert-p'>El telefono es requerido</p>
            )}
          </section>
          <section className="input-pass">
            <input
              {...register("password", {
                required: true,
                pattern: /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,32}$/,
              })}
              type={eyes ? "text" : "password"}
              id="password"
              placeholder="CONTRASEÑA"
            />
            <span onClick={showPass}>
              {eyes ? (
                <i className="fa-solid fa-eye"> </i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </span>
            {errors.password?.type === "required" && (
              <p className='alert-p'>Este campo es requerido</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="small_letter">
                La contraseña debe tener Mínimo 8 caracteres, al menos una letra
                y un número
              </p>)}
              <p className="op_lettler">
                La contraseña debe tener Mínimo 8 caracteres, al menos una letra
                y un número
              </p>
          </section>
          <section className="input-pass">
            {repeatPass ? <p className='alert-p'>las contraseñas no cinciden </p> : <p className='alert-p'></p>}
            <input
              {...register("repeat_password", {
                required: true,
              })}
              type={eyesRepeat ? "text" : "password"}
              id="repeat_password"
              placeholder="REPETIR CONTRASEÑA"
            />
            <span onClick={showRepeatPass}>
              {eyesRepeat ? (
                <i className="fa-solid fa-eye"> </i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </span>
            {errors.repeat_password?.type === "required" && (
              <p className='alert-p'>Este campo es requerido</p>
            )}
            {repeatPass ? <p className='alert-p'>las contraseñas no coinciden </p> : <p className='alert-p'></p>}
          </section>
          <section className="register_checkbox">
            <input type="checkbox" id="checkbox" onChange={handleCheck}/>
            <label htmlFor="checkbox">Acepto términos y condiciones</label>
              {/* {errors.checkbox?.type === 'required' && <p className='alert-p'>Acepte los términos y condiciones</p>} */}
          </section>
          <button className=" w-btn stl_button">
            <h3>REGISTRARME</h3>
          </button>
        </section>
      </section>
    </form>
  );
};

export default Register;
