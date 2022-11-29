import axios from "axios";
import React, {useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/shipping2.css"
import estado from "../../assets/estado.png"

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    phone: ""
  }
  
  const Shipping = () => {
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
    <div className="container_shipping">
      <div>
      <img className='estado' src={estado} alt="estado"/>
      </div>
      <div className="forms_containter">
        <div>
          <form onSubmit={handleSubmit(submit)} className='register_form'>
              <h3 className="title">
              Origen del envío.
              </h3>
              <section>
              <input
                {...register("name_origin",{
                  required: true
                })}
                type="text"
                id="name_origin"
                placeholder="NOMBRE Y APELLIDO / RAZÓN SOCIAL"
              />
              {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
              </section>
              <section>
              <input 
                {...register("email_origen",{
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i 
                })}
                type="text" 
                id="email_origen"
                placeholder="CORREO ELECTRÓNICO"
              />
              {errors.email?.type === 'required' && <p>El email es requerido</p>}
              {errors.email?.type === 'pattern' && <p>Debe ingresar un email valido</p>}
              {/* <p>{respuestaEmail && respuestaEmail}</p> */}
            </section>
            <div className="phone_container">
            <section className="cod_area_container">
              <input
                {...register("area_phone_origen",{
                  required: true
                })}
                type="text"
                id="area_phone_origen"
                placeholder="CÓDIGO"
              />
              {errors.phone?.type === 'required' && <p>El código de área es requerido</p>}
              </section>
              <section className="telefono_container">
              <input
                {...register("phone_origen",{
                  required: true
                })}
                type="text"
                id="phone_origen"
                placeholder="TELÉFONO"
              />
              {errors.phone?.type === 'required' && <p>El telefono es requerido</p>}
              </section>
            </div>
            <section>
              <input {...register("pais_origin",{
                required: true,
              })} type="select" id="pais_origin" placeholder="PAIS"/>
            </section>
            <section>
              <input {...register("region_origin",{
                required: true,
              })} type="select" id="region_origin" placeholder="REGION"/>
            </section>
            <section>
              <input {...register("provincia_origen",{
                required: true,
              })} type="select" id="provincia_origen" placeholder="PROVINCIA"/>
            </section>
            <section>
              <input {...register("distrito_origin",{
                required: true,
              })} type="select" id="distrito_origin" placeholder="DISTRITO"/>
            </section>
          </form>
        </div>
        <div>
        <form onSubmit={handleSubmit(submit)} className='register_form'>
              <h3 className="title">
              Origen del envío.
              </h3>
              <section>
              <input
                {...register("name_origin",{
                  required: true
                })}
                type="text"
                id="name_origin"
                placeholder="NOMBRE Y APELLIDO / RAZÓN SOCIAL"
              />
              {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
              </section>
              <section>
              <input 
                {...register("email_origen",{
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i 
                })}
                type="text" 
                id="email_origen"
                placeholder="CORREO ELECTRÓNICO"
              />
              {errors.email?.type === 'required' && <p>El email es requerido</p>}
              {errors.email?.type === 'pattern' && <p>Debe ingresar un email valido</p>}
              {/* <p>{respuestaEmail && respuestaEmail}</p> */}
            </section>
            <div className="phone_container">
            <section className="cod_area_container">
              <input
                {...register("area_phone_origen",{
                  required: true
                })}
                type="text"
                id="area_phone_origen"
                placeholder="CÓDIGO"
              />
              {errors.phone?.type === 'required' && <p>El código de área es requerido</p>}
              </section>
              <section className="telefono_container">
              <input
                {...register("phone_origen",{
                  required: true
                })}
                type="text"
                id="phone_origen"
                placeholder="TELÉFONO"
              />
              {errors.phone?.type === 'required' && <p>El telefono es requerido</p>}
              </section>
            </div>
            <section>
              <input {...register("pais_origin",{
                required: true,
              })} type="select" id="pais_origin" placeholder="PAIS"/>
            </section>
            <section>
              <input {...register("region_origin",{
                required: true,
              })} type="select" id="region_origin" placeholder="REGION"/>
            </section>
            <section>
              <input {...register("provincia_origen",{
                required: true,
              })} type="select" id="provincia_origen" placeholder="PROVINCIA"/>
            </section>
            <section>
              <input {...register("distrito_origin",{
                required: true,
              })} type="select" id="distrito_origin" placeholder="DISTRITO"/>
            </section>
          </form>
        </div>
      </div>

      <div className="button_form_container">
            <section className="register_checkbox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Acepto términos y condiciones</label>
              {/* {errors.checkbox?.type === 'required' && <p>Acepte los términos y condiciones</p>} */}
            </section>
            <button className="registrar_btn"> Resgistrarme</button>

      </div>
      
      
    </div>


  )
}

export default Shipping

