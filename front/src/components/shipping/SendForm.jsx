import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddressClient from "./AddressClient";
import { useSelector } from "react-redux";

// const defaulValues = {
//   user_id,
//   ubigeo_id_origin,
//   destiny_name,
//   destiny_address,
//   destiny_email,
//   destiny_phone,
//   origin_name,
//   origin_address,
//   origin_email,
//   origin_phone,
//   ubigeo_id_destiny,
//   category_id,
//   branch_id,
//   shipping_date,
//   price,
//   high_size,
//   width_size,
//   large_size,
//   weight,
//   special_cares,
//   origin_comment,
//   destiny_comment
// }
const SendForm = (data) => {
  const [toggleAddressOrigin, setToggleAddressOrigin] = useState();
  const [toggleAddressDestiny, setToggleAddressDestiny] = useState();
  const [dimensions, setDimenstions] = useState();

  // //* origin ubigeo
  const [OriginUbigeo, setOriginUbigeo] = useState();

  // //* destiny ubigeo
  const [destinyUbigeo, setDestinyUbigeo] = useState();

  const [surcursales, setSurcursales] = useState();
  
  const userName = useSelector((state) => state.userLogin);

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
    const url = `http://3.89.23.42:4000/api/v1/shipping`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const submit = (data) => {
    delete data.order_option;
    const data2 = {... data , user_id: userName.id , ubigeo_id_destiny: destinyUbigeo , ubigeo_id_origin: OriginUbigeo}
    postForm(data2);
    // console.log(data)
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
    <>
      <form onSubmit={handleSubmit(submit)} className="form_cointainer">
        <div className="origin_data">
          <section>
            <input
              {...register("origin_name", {
                required: true,
              })}
              type="text"
              id="origin_name"
              placeholder="Nombre y Apellido / Raz??n Social"
            />
            {errors.origin_name?.type === "required" && (
              <p className="required">Campo requerido</p>
            )}
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
              {errors.origin_phone?.type === "required" && (
                <p className="required">Campo requerido</p>
              )}
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
              {errors.origin_email?.type === "required" && (
                <p className="required">Campo requerido</p>
              )}
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
            {errors.order_option?.type === "required" && (
              <p className="required">Seleccione una opci??n</p>
            )}
          </section>

          {toggleAddressOrigin === "surcursal" ? (
            <select
              {...register("ubigeo_id_origin", {
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
              <AddressClient setUbigeo={setOriginUbigeo} />

              <div className="address_code">
                <section>
                  <input
                    {...register("origin_address", {
                      required: true,
                    })}
                    type="text"
                    id="origin_address"
                    placeholder="direccion de retiro del envio"
                  />
                  {errors.origin_address?.type === "required" && (
                    <p className="required">Campo requerido</p>
                  )}
                </section>
                <section>
                  <input
                    {...register("origin_zip_code", {
                      required: true,
                    })}
                    type="text"
                    id="zip_code"
                    placeholder="Codigo Postal"
                  />
                  {errors.zip_code?.type === "required" && (
                    <p className="required">Campo requerido</p>
                  )}
                </section>
              </div>
            </div>
          )}
          <section>
            <textarea
              {...register("origin_comment", {
                required: true,
              })}
              type="text"
              id="comments"
              placeholder="Quieres hacer una aclaraci??n?"
            />
          </section>
        </div>
        <div className="destiny_data">
        {/* <section className="container-title position_title">
              <div className="circle"></div>

              <h3>Destino del env??o</h3>
              <p>Complet?? los datos del destinatario</p>
            </section> */}
          <section>
            <input
              {...register("destiny_name", {
                required: true,
              })}
              type="text"
              id="destiny_name"
              placeholder="Nombre y Apellido del destinatario"
            />
            {errors.destiny_name?.type === "required" && (
              <p className="required">Campo requerido</p>
            )}
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
              {errors.destiny_phone?.type === "required" && (
                <p className="required">Campo requerido</p>
              )}
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
              {errors.destiny_email?.type === "required" && (
                <p className="required">Campo requerido</p>
              )}
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
            {errors.order_option?.type === "required" && (
              <p className="required">Campo requerido</p>
            )}
          </section>

          {toggleAddressDestiny === "surcursal" ? (
            <select
              {...register(" ubigeo_id_destiny", {
                required: true,
              })}
            >
              <option hidden selected>
                Surcursales
              </option>
              S
              {surcursales?.map((surcur) => (
                <option
                  key={surcur.id}
                  value={surcur.ubigeo.id}
                  // onChange={selectBranchId}
                >
                  {surcur.address}
                </option>
              ))}
            </select>
          ) : (
            <div>
              <AddressClient setUbigeo={setDestinyUbigeo} />
              <div className="address_code">
                <section>
                  <input
                    {...register("destiny_address", {
                      required: true,
                    })}
                    type="text"
                    id="address"
                    placeholder="direccion de entrega del envio"
                  />
                  {errors.address?.type === "required" && (
                    <p className="required">Campo requerido</p>
                  )}
                </section>
                <section>
                  <input
                    {...register("destiny_zip_code", {
                      required: true,
                    })}
                    type="text"
                    id="destiny_zip_code"
                    placeholder="Codigo Postal"
                  />
                  {errors.destiny_zip_code?.type === "required" && (
                    <p className="required">Campo requerido</p>
                  )}
                </section>
              </div>
            </div>
          )}
          <section>
            <textarea
              {...register(" destiny_address", {
                required: true,
              })}
              type="text"
              id="comments"
              placeholder="Quieres hacer una aclaraci??n?"
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
              <h3>Datos del paquete</h3>
              <p>Cuentanos que quieres env??ar</p>
            </section>
          </main>
          <section>
            <select
              //todo edit
              {...register("want_send", {
                required: true,
              })}
              id="want_send"
              onChange={handleChangePack}
            >
              <option hidden selected>
                Qu?? quieres enviar?
              </option>
              <option value="Encomienda">Encomienda</option>
              <option value="sobre">Sobre</option>
              <option value="carta">Carta documento</option>
              <option value="sobre internacional">Sobre internacional</option>
              <option value="e-commerce">E-commerce</option>
            </select>
            {errors.want_send?.type === "required" && (
              <p className="required">Campo requerido</p>
            )}
          </section>
          <div
            className={
              dimensions === "sobre" || dimensions === "sobre internacional"
                ? "off"
                : "on"
            }
          >
            <div>
              <section>
                <input
                  {...register("high_size", {
                    required: true,
                  })}
                  type="number"
                  id="high_size"
                  placeholder="Alto (cm)*"
                />
                {errors.high_size?.type === "required" && (
                  <p className="required">Campo requerido</p>
                )}
              </section>
              <section>
                <input
                  {...register("width_size", {
                    required: true,
                  })}
                  type="number"
                  id="width_size "
                  placeholder="Ancho (cm)*"
                />
                {errors.width_size?.type === "required" && (
                  <p className="required">Campo requerido</p>
                )}
              </section>
            </div>
            <div>
              <section>
                <input
                  {...register("large_size", {
                    required: true,
                  })}
                  type="number"
                  id="large_size "
                  placeholder="largo (cm)"
                />
                {errors.large_size?.type === "required" && (
                  <p className="required">Campo requerido</p>
                )}
              </section>
              <section>
                <input
                  {...register("weight", {
                    required: true,
                  })}
                  type="number"
                  id="weight "
                  placeholder="Peso estimado (KG)"
                />
                {errors.weight?.type === "required" && (
                  <p className="required">Campo requerido</p>
                )}
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
            {errors.special_cares?.type === "required" && (
              <p className="required">Campo requerido</p>
            )}
          </section>
          <section>
            <textarea
              {...register("comments", {
                required: true,
              })}
              type="text"
              id="comments"
              placeholder="Quieres hacer una aclaraci??n?"
            />
          </section>
        </div>

        <div className="container_price">
          <main className="header-style_title ">
            <section className="container-title">
              <div className="circle"></div>
              <h3>M??todo pago</h3>
              <p>Con tarjetas o efectivo</p>
            </section>
          </main>
          <section>
            <h4>{dimensions ? dimensions : "-"}</h4>
            <h4>precio de acuerdo al tipo de envio</h4>
          </section>
          <hr />
          <section>
            <h4>Env??o</h4>
            <h4>precio del envio</h4>
          </section>
          <hr />
          <section>
            <h3>Total</h3>
            <h4>precio total</h4>
          </section>

          <section className="container_checkbox">
            <h3> Quieres pagar con</h3>
            <section className="checkbox">
              <div>
                <input
                  type="radio"
                  id="checkbox"
                  name="checkbox"
                  value="efectivo"
                />
                <label htmlFor="checkbox">Efectivo en surcursal</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="checkbox"
                  name="checkbox"
                  value="tarjeta"
                />
                <label htmlFor="checkbox">D??bito / Cr??dito</label>
              </div>
            </section>
          </section>
        </div>
        <button className="input_icon">ABONAR Y CONFIRMAR ENVIO</button>
      </form>
    </>
  );
};

export default SendForm;
