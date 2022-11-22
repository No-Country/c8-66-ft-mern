import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PackageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [dimensions, setDimenstions] = useState();
  const postPack = (data) => {
    const url = `http://localhost:4000/api/v1/`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const submit = (data) => {
    postPack(data);
  };

  const handleChange = () => {
    setDimenstions(event.target.value);
  };


  return (
    <form onSubmit={handleSubmit(submit)} className="pack_form">
      <section>
        <select
          {...register("want_send", {
            required: true,
          })}
          id="want_send"
          onChange={handleChange}
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
              {...register("height ", {
                required: true,
              })}
              type="text"
              id="height "
              placeholder="Alto (cm)*"
            />
            {errors.height?.type === "required" && <p>Campo requerido</p>}
          </section>
          <section>
            <input
              {...register("width", {
                required: true,
              })}
              type="text"
              id="width "
              placeholder="Ancho (cm)*"
            />
            {errors.width?.type === "required" && <p>Campo requerido</p>}
          </section>
        </div>
        <div>
          <section>
            <input
              {...register("long", {
                required: true,
              })}
              type="text"
              id="long "
              placeholder="largo (cm)"
            />
            {errors.long?.type === "required" && <p>Campo requerido</p>}
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
          {...register("care", {
            required: true,
          })}
          id="care"
        >
          <option hidden selected>
            Requiere cuidados especiales?
          </option>
          <option value={true}>si</option>
          <option value={false}>no</option>
        </select>
        {errors.care?.type === "required" && <p>Campo requerido</p>}
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
    </form>
  );
};

export default PackageForm;
