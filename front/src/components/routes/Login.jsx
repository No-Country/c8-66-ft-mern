import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState();
  const history = useNavigate();

  const login = (data) => {
    const url = `http://localhost:4000/api/v1/users/login`;
    axios.post(url, data).then((res) => {
      setUser(res.data.data);
      localStorage.setItem("token", res.data.data.token);
      history("/");
    });
  };
  // console.log(user);
  const onSubmit = (data) => {
    login(data);
  };

  const showPass = () => {
    setEyes(!eyes);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="get-into">
      <section className="header-img">
        <img src="../img/delivery.png" alt="" />
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

        <section className="data_login">
          <input
            type="text"
            placeholder="CORREO ELECTRONICO*"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          {errors.email?.type === "required" && <p className="alert-p">El email es requerido</p>}
          {errors.email?.type === "pattern" && (
            <p className="alert-p">Debe ingresar un email valido</p>
          )}
        </section>

        <section className="data_login">
          <input
            {...register("password", {
              required: true,
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
            <p className="alert-p">El password es requerido</p>
          )}
        </section>
        <button className="stl_button w8-btn">
          <h3>INICIAR SESIÓN</h3>
        </button>
        <div className="footer_login">
          {/* <div>
            <input type="radio" />
            <h4> recordar mi contraseña</h4>
          </div> */}
          <a>Olvidé mi contraseña</a>
        </div>
      </section>
    </form>
  );
};

export default Login;
