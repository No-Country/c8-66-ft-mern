import React from 'react'
import { useForm } from "react-hook-form";

const SendForm = (data) => {

    const { register, handleSubmit,formState:{errors}, reset } = useForm();

    const postForm= (data)=>{
        const url = `http://localhost:4000/api/v1/`;
        axios.post(url, data)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err)
          )
    }
const submit = (data)=>{
    postForm(data)
}
    
  return (
    <form onSubmit={handleSubmit(submit)} className='send_form'>
       <section>
        <input
          {...register("name",{
            required: true
          })}
          type="text"
          id="name"
          placeholder="Nombre y Apellido / Razón Social"
        />
        {errors.name?.type === 'required' && <p>Campo requerido</p>}
        </section>
       <section>
        <input
          {...register("phone",{
            required: true
          })}
          type="text"
          id="phone"
          placeholder="94232234"
        />
        {errors.phone?.type === 'required' && <p>Campo requerido</p>}
        </section>
        <section>
        <input 
          {...register("email",{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i 
          })}
          type="text" 
          id="email"
          placeholder="email"
        />
        {errors.email?.type === 'required' && <p>Campo requerido</p>}
      </section>

      <section>
        <select
          {...register("order_option",{
            required: true
          })}
          id="order_option" 
        > 
        <option hidden selected>Como nos entregas tu pedido?</option>
        <option value="1">Pick up en mi domicilio</option>
        <option value="2">En una surcursal</option>
        </select>
        {errors.order_option?.type === 'required' && <p>Campo requerido</p>}
        </section>

        <section>
        <input 
          {...register("postal_code",{
            required: true,

          })}
          type="text" 
          id="postal_code"
          placeholder="Codigo Postal"
        />
        {errors.postal_code?.type === 'required' && <p>Campo requerido</p>}
      </section>

        <section>
        <textarea  
          {...register("comments",{
            required: true,
          })}
          type="text" 
          id="comments"
          placeholder="Quieres hacer una aclaración?"
        />
      </section>
    </form>
  )
}

export default SendForm