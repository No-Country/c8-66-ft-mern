import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddressClient from "./AddressClient";

const SendForm = (data) => {
  const [toggleAddressOrigin, setToggleAddressOrigin] = useState();
  const [toggleAddressDestiny, setToggleAddressDestiny] = useState();
  const [dimensions, setDimenstions] = useState();

  // //* origin ubigeo
  // const [OriginUbigeo, setOriginUbigeo] = useState();

  // //* destiny ubigeo
  // const [destinyUbigeo, setDestinyUbigeo] = useState();

  const [surcursales, setSurcursales] = useState();

  const getAllSurcursales = () => {
    const url = "http://3.89.23.42:4000/api/v1/branch";
    axios.get(url).then((res) => setSurcursales(res.data.branch));
  };
  useEffect(() => {
    getAllSurcursales();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const postForm = (data) => {
    const url = `http://localhost:4000/api/v1/shipping`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const submit = (data) => {
    postForm(data);
  };

  const handleChangeAddresOrigin = () => {
    setToggleAddressOrigin(event.target.value);
  };
  const handleChangeAddresdestiny = () => {
    setToggleAddressDestiny(event.target.value);
  };
  const handleChangePack = () => {
    setDimenstions(event.target.value);
  };


  return (
    <form onSubmit={handleSubmit(submit)} className='form_cointainer'>

      <div className="origin_data">
        <section>
          <input
            {...register("origin_name", {
              required: true,
            })}
            type="text"
            id="origin_name"
            placeholder="Nombre y Apellido / Razón Social"
          />
          {errors.origin_name?.type === "required" && <p>Campo requerido</p>}
        </section>
        <div className="phone_email">
        <section>
          <input
            {...register("origin_phone", {
              required: true,
            })}
            type="text"
            
            id="origin_phone"
            placeholder="94232234"
          />
          {errors.origin_phone?.type === "required" && <p>Campo requerido</p>}
        </section>
        <section>
          <input
            {...register("origin_email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
            type="text"
            id="origin_email"
            placeholder="email"
          />
          {errors.origin_email?.type === "required" && <p>Campo requerido</p>}
        </section>
        </div>
       

        <section>
          <select
            {...register("order_option", {
              required: true,
            })}
            id="order_option"
            onChange={handleChangeAddresOrigin}
          >
            <option hidden selected>
              Como nos entregas tu pedido?
            </option>
            <option value="domicilio">Pick up en mi domicilio</option>
            <option value="surcursal">En una surcursal</option>
          </select>
          {errors.order_option?.type === "required" && <p>Campo requerido</p>}
        </section>

        {toggleAddressOrigin === "surcursal" ? (
          <select
            {...register("origin_ubigeo", {
              required: true,
            })}
          >
            <option hidden selected>
              Surcursales{" "}
            </option>
            {surcursales?.map((surcur) => (
              <option key={surcur.id} value={surcur.ubigeo.id}>
                {surcur.address}
              </option>
            ))}
          </select>
        ) : (
          <div>
            <AddressClient />

            <div  className="address_code"> 
            <section>
              <input
                {...register("address", {
                  required: true,
                })}
                type="text"
                id="address"
                placeholder="direccion de retiro del envio"
              />
              {errors.address?.type === "required" && <p>Campo requerido</p>}
            </section>
            <section>
              <input
                {...register("zip_code", {
                  required: true,
                })}
                type="text"
                id="zip_code"
                placeholder="Codigo Postal"
              />
              {errors.zip_code?.type === "required" && <p>Campo requerido</p>}
            </section>
            </div>
           
          </div>
        )}
        <section>
          <textarea
            {...register("comments", {
              required: true,
            })}
            type="text"
            id="comments"
            placeholder="Quieres hacer una aclaración?"
          />
        </section>
      </div>
      <div className="destiny_data">
        <section>
          <input
            {...register("destiny_name", {
              required: true,
            })}
            type="text"
            id="destiny_name"
            placeholder="Nombre y Apellido del destinatario"
          />
          {errors.destiny_name?.type === "required" && <p>Campo requerido</p>}
        </section>
        <div className="phone_email">
        <section>
          <input
            {...register("destiny_phone", {
              required: true,
            })}
            type="text"
            id="destiny_phone"
            placeholder="94232234"
          />
          {errors.destiny_phone?.type === "required" && <p>Campo requerido</p>}
        </section>
        <section>
          <input
            {...register("destiny_email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
            type="text"
            id="destiny_email"
            placeholder="email"
          />
          {errors.destiny_email?.type === "required" && <p>Campo requerido</p>}
        </section>
        </div>

        <section className="content-select">
          <select
            {...register("order_option", {
              required: true,
            })}
            id="order_option"
            onChange={handleChangeAddresdestiny}
          >
            <option hidden selected>
              Como nos entregas tu pedido?
            </option>
            <option value="domicilio">Pick up en mi domicilio</option>
            <option value="surcursal">En una surcursal</option>
          </select>
          {errors.order_option?.type === "required" && <p>Campo requerido</p>}
        </section>

        {toggleAddressDestiny === "surcursal" ? (
          <select
            {...register("destiny_ubigeo", {
              required: true,
            })}
          >
            <option hidden selected>
              Surcursales
            </option>
            {surcursales?.map((surcur) => (
              <option key={surcur.id} value={surcur.ubigeo.id}>
                {surcur.address}
              </option>
            ))}
          </select>
        ) : (
          <div>
            <AddressClient />

<div className="address_code"> 
<section>
              <input
                {...register("address", {
                  required: true,
                })}
                type="text"
                id="address"
                placeholder="direccion de retiro del envio"
              />
              {errors.address?.type === "required" && <p>Campo requerido</p>}
            </section>
            <section>
              <input
                {...register("zip_code", {
                  required: true,
                })}
                type="text"
                id="zip_code"
                placeholder="Codigo Postal"
              />
              {errors.zip_code?.type === "required" && <p>Campo requerido</p>}
            </section>
</div>
           
          </div>
        )}
        <section>
          <textarea
            {...register("comments", {
              required: true,
            })}
            type="text"
            id="comments"
            placeholder="Quieres hacer una aclaración?"
          />
        </section>
      </div>
     
  
      <div className="package_form">
      <main className="header-style_title ">
        {/* <div>
           <span></span>
        </div> */}
        <section className="container-title">
        <div className="circle"></div>
            <h3>
              Datos del paquete
            </h3>
              <p>Cuentanos que quieres envíar</p>
          </section>
    
      </main>
      <section>
        <select
          {...register("want_send", {
            required: true,
          })}
          id="want_send"
          onChange={handleChangePack}
        >
          <option hidden selected>
            Qué quieres enviar?
          </option>
          <option value="Encomienda">Encomienda</option>
          <option value="sobre">Sobre</option>
          <option value="carta">Carta documento</option>
          <option value="sobre internacional">Sobre internacional</option>
          <option value="e-commerce">E-commerce</option>
        </select>
        {errors.want_send?.type === "required" && <p>Campo requerido</p>}
      </section>
      <div className={dimensions === "sobre" || dimensions === "sobre internacional" ? "off": "on"}>
        <div>
          <section>
            <input
              {...register("high_size", {
                required: true,
              })}
              type="text"
              id="high_size"
              placeholder="Alto (cm)*"
            />
            {errors.high_size?.type === "required" && <p>Campo requerido</p>}
          </section>
          <section>
            <input
              {...register("width_size", {
                required: true,
              })}
              type="text"
              id="width_size "
              placeholder="Ancho (cm)*"
            />
            {errors.width_size?.type === "required" && <p>Campo requerido</p>}
          </section>
        </div>
        <div>
          <section>
            <input
              {...register("large_size", {
                required: true,
              })}
              type="text"
              id="large_size "
              placeholder="largo (cm)"
            />
            {errors.large_size?.type === "required" && <p>Campo requerido</p>}
          </section>
          <section>
            <input
              {...register("weight", {
                required: true,
              })}
              type="text"
              id="weight "
              placeholder="Peso estimado (KG)"
            />
            {errors.weight?.type === "required" && <p>Campo requerido</p>}
          </section>
        </div>
      </div>

      <section>
        <select
          {...register("special_cares", {
            required: true,
          })}
          id="special_cares"
        >
          <option hidden selected>
            Requiere cuidados especiales?
          </option>
          <option value={true}>si</option>
          <option value={false}>no</option>
        </select>
        {errors.special_cares?.type === "required" && <p>Campo requerido</p>}
      </section>
      <section>
        <textarea
          {...register("comments", {
            required: true,
          })}
          type="text"
          id="comments"
          placeholder="Quieres hacer una aclaración?"
        />
      </section>
      </div>
  
      <div className="container_price">
        <main className="header-style_title ">

              <section className="container-title">
          <div className="circle"></div>
            <h3>
              Método pago
            </h3>
              <p>Con tarjetas o efectivo</p>
          </section>
        </main>
  <section>
 <h4>
  {dimensions ? dimensions : "-_"}
</h4>
<h4>
  precio de acuerdo al tipo de envio
</h4>
        </section>
<hr />
<section>
        <h4>
          Envío
</h4>
<h4>
    precio del envio
</h4>
        </section>
        <hr />
<section>
        <h3>
          Total
</h3>
<h4>
   precio total
</h4>
        </section>

<section>
<h3> Quieres pagar con</h3>
<section className="checkbox">
        <input type="radio" id="checkbox" name = "checkbox" value = "efectivo"/>
        <label htmlFor="checkbox">Efectivo en surcursal</label>
        <input type="radio" id="checkbox" name = "checkbox" value = "tarjeta"/>
        <label htmlFor="checkbox">Débito / Crédito</label>
      </section>
</section>
      </div>
    <button className="input_icon">ABONAR Y CONFIRMAR ENVIO</button>
    </form>
  );
};

export default SendForm;
