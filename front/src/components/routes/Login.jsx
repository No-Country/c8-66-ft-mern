import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";


const Login = () => {
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
  const history = useNavigate();

  const login = (data) => {
    const url = `http://localhost:4000/api/v1/users/login`;
    axios
      .post(url, data)
      .then((res) => {
        setUser(res.data.data)
        console.log(user)
        localStorage.setItem('token',res.data.data.token)
      })
      .catch((err) =>
      console.log(err))
      history('/')
  };

  const onSubmit = (data) => {   
        login(data)
  };



  const showPass = () => {
    setEyes(!eyes);
  };

  return (
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
  );
};

export default Login;
