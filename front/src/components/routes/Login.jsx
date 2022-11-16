import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  // const userForEmail = useSelector(state => state.user);

  const login = (data) => {
    const url = `url`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => alert("El usuario no se a podido loguear"));
  };

  const onSubmit = (data) => {
      if (data.password == userForEmail.password) {
        login(data)
      }
     else{
      alert ("Usuario no existente")
     }
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
