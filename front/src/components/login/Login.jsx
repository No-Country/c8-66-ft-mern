import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";




const Login = () => {
  const { register, formState:{errors}, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
    
  });
  const [eyes, setEyes] = useState(false)
  // const userForEmail = useSelector(state => state.user);

  const login =(data)=>{
    const url = `url`;
    axios.post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => 
           alert("El usuario no se a podido loguear")
      )
  }

  const onSubmit = (data)=>{
      console.log(data)
      if (data.email == userForEmail.email) {
        login(data)
      }
     else{
      alert ("Usuario no existente")
     }
  }

 

  // useEffect(() => {
  //   dispatch(getUserDetail(email.email));
  // }, [dispatch, email.email]);

  const showPass = ()=>{
    if (eyes) {
      setEyes(false)
    }
   else{
    setEyes(true)
   }
  }
    
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <h2>Login</h2>
    <section>
        <label htmlFor="email">Email</label>
        <input 
        type="text"
        name="email"
        placeholder="email" 
        {...register('email',{
          required: true,
          pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })}/>
        {errors.email?.type === 'required' && <p>El email es requerido</p>}
        {errors.email?.type === 'pattern' && <p>Debe ingresar un email valido</p>}
      </section>

      <section>
        <label htmlFor="password">Contraseña</label>
        <input
        name="password"
        {...register('password',{
          required: true,
        })}type={ eyes ? "text": "password"} id="password" placeholder="Password"/>
        <span onClick={showPass}>
       {eyes?  <i class="fa-solid fa-eye">  </i> : <i class="fa-solid fa-eye-slash"></i>}
       </span>
        {errors.password?.type === 'required' && <p>El password es requerido</p>}
      </section>
      <button> Loguearme</button>

   </form>

  )
}

export default Login