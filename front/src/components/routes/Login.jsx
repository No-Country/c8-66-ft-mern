import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles/login2.css"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [eyes, setEyes] = useState(false);
  const [user, setUser] = useState([]);

  const login = (data) => {
    
    const url = `http://3.89.23.42:4001/api/v1/users/login/`;
    axios
      .post(url, data)
      .then((res) => {
        setUser(res.data.data)
        localStorage.setItem('token',res.data.data.token)
      })
      .catch((err) =>
      console.log(err))
      navigate("/shipping")
  };

  const country = (data) => {
    
    const url = `http://3.89.23.42:4001/api/v1/users/login/`;
    axios
      .post(url, data)
      .then((res) => {
        setUser(res.data.data)
        localStorage.setItem('token',res.data.data.token)
      })
      .catch((err) =>
      console.log(err))
      navigate("/shipping")
  };


  const onSubmit = (data) => {   
        login(data)
  };



  const showPass = () => {
    setEyes(!eyes);
  };

  return (
    <div className="container_register">
      <form onSubmit={handleSubmit(onSubmit)} className='login__form'>
        <h2 >Login</h2>
        <section className='login__section'>
          <label  className='login__label'
          htmlFor="email">Email</label>
          <input
            type="text"          
            placeholder="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "required" && <p>El email es requerido</p>}
          {errors.email?.type === "pattern" && (
            <p>Debe ingresar un email valido</p>
          )}
        </section>

        <section>
          <label className="login__label" htmlFor="password">
            Contraseña
          </label>
          <input
            {...register("password", {
              required: true,
            })}
            type={eyes ? "text" : "password"}
            id="password"
            placeholder="Password"
          />
          <span onClick={showPass}>
            {eyes ? (
              <i className="fa-solid fa-eye"> </i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
          {errors.password?.type === "required" && (
            <p>El password es requerido</p>
          )}
        </section>
        <button className="login__btn"> Loguearme</button>
      </form>
    </div>
  );
};

export default Login;
