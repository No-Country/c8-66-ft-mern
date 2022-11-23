import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

const Home = () => {

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


  const infoEnvio = (data) => {
    const url = `url`;
    axios
      .post(url, data)
      .then((res) => {
       
      })
      .catch((err) =>
      console.log(err))
  };

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className="home">
      <h1 class="titulo1">¡Conocé el estado de tu envío!</h1>
        <div class='search'>
          <div class="search">
            <select class="search__input" placeholder='Tipo de envío'>
              <option value= "enc">Encomienda</option>
              <option value= "sob" >Sobre</option>
              <option value= "cad">Carta documento</option>
              <option value= "sobi">Sobre internacional</option>
              <option value= "eco">E Commers</option>
            </select>
          <input type="text" class="search__input" placeholder='Tipo de envío'/>
        <button class="search__button">
        <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div/>
       <h1 className="titulo3">¿Qué querés enviar?</h1>
       <h4 className='titulo4'>Múltiples servicios para tus múltiples nesecidades</h4>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbVJREFUSEu1lYExBEEQRf9FgAjIABGQASJABIgAESACREAGyIAMZIAIqLfV/6qva3btKjdVVzfTO9O/+//umZmWPGZL9q8pALuSziVtSDqW9DwmuDEAOMTxUXEIwJmk1yGgIYBVSSeSLsLBV5pjWwn7naRLSe8toD6A04gaEI8DSY+xwO49mD4lXUu6ifn8UAXYl3QVPLPpXhLcr8cJaIF/Rwt9ZHMY3wECmHPdyABEtxf2lzhoITmUaSFaaMEhgyD4vhNrdNmuAN+JDhzjIFcKtOAEXUwLa2hxhfG/EHzOwACIOSQgtCCso4UubIx8tvPdAlgbISDZ3EpCMw8yhrqPTH8LwLY+AU1VrrAcrJnozaBWVhXQEbsQnkrBTAawQzoZWhiUKjowFhzW9RBFid75tDrjA5VGNbnifs0gd2wFaQHkPYj+0CcyzbEZH1t90KLDzmsfvEnaqmXKGp4ptb4+qBnUm5Y+oOutT/M98EXGRgO5Y13j9Eq9aQmMn6+PLruh67rVB659nHjOxUYAk67rLBxcEpmvhtwHZPnnB6dWEEKaW7T6tyez1Q+jbWPe5NHOWht/ACgGaxmb7/TKAAAAAElFTkSuQmCC"className='iconos'/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR1JREFUSEvdleFNw0AMhb9MABsAG8AEwAawAZ2gMAl0ArpB2QCYAEaADdoJQB+ypVNIyjVRhFT/SZSz37OffU7DxNZMjM9+EVwAj8DxSNk+gBnwIk4pkQdHI8EzXKyTNsFXnJ4B7wOJToG3iP1JvqwgCdZR4tOOJFch8eFfBIn7ANxVkug7b/n2ViDofTjbqGvAqrrMbFeAA6KVsb0EHqil4AcBftnRF32eAUk2QWLvUuqtBGZjoH04j+xugUXxnlW+AuqfVVYTlL1IfZfx8SaeEkpc2s4EBpuh4EqmKYkkXZM2iEBQNS8r6LsrgwkqJ7a+ybWAbb//q8AxyyYOzT7jPnMrl7vI22gTx25UwZ2wX+t6bNad8fv1y5xEom9+ED0ZymZNKwAAAABJRU5ErkJggg=="className='iconos'/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMVJREFUSEvtleERAUEMRt9VgArowKgAneiMUpRAB3SgAybmzqy93CZ27WDG/dxLvpfNl7s0VH6ayvpogBWwBWYJ+AFYAxerQA1wAqZWIuCCaIBrKz7Uvu69hJmQEsARmFuQEsAE2FuQEoDkji2IBxB7EnoQz4J4sggPcwDSlmViyp40PQDHxN5D1On7CkCq51J5V2T2DaoD/h70OvDKh/UWk3/PA9lSI2/ZUdw53oRDK3Pn3Gqhvohv2r/r4/wjSz+zO3raDTzEPRmj6DYvAAAAAElFTkSuQmCC" className='iconos'/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPJJREFUSEvtldsRwUAUhr9UgAqUgEoogQ6oIDqhBDqhAypABcyf2TVn4uQikZeMfcrsnvPf9pKEjkfSMT79IlgAKTBtGdsF2AAH4diItDBuCR7bT8AsT/AMq0dg3pDI9mbirYNIoDnFtQcGNYkewDLEYnFcghFwB4aBpMqNVAs89tyCqEIHKlzFTSpxY1ULU653Qdg7HS+imIpOgYg8N3nVAhaBHYUObJHnRuvZEXRUf03gudGc9sdT3ZhAjdGNvm3WRQetVkQ1T6lb9ieoTO8jol8+duf4KtuLpouyBSaV2soLrsDae65b4vrt/fpldhLRC6AYNhngkXrwAAAAAElFTkSuQmCC"className='iconos'/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV9JREFUSEvllP0tRFEQR89WgArQARWgAlSAClABKqADVGBVgAroAB1QATly5+W+8Z68fckmxPyz2dk7c+bjNzthzjaZc376ABfA4YxwY45zTBfgFDiZMXk8PwOMbywDVoBHYBHYAu6BHeAGeAA2S6T+DWAXmBb/HfAGrAMvQcgAH28DtyWx76KjurouX8T6KfjLaoDVWcU7sFZVkas1rqsru38CFqruWwDbWgbyHG3boNUKarLnMpKlauTRmbl83wL8lMi3XQD9AozVAuwU3GMLcAXslaWF3C7TYp2tgdl/UADnZXzXwH4GBD0r1Go0x1Rbn7/VbVbRR5XhtSzNSqzaQ1Jhmio7KqOxc0Xh/sKavH2AsX8hUeDvAngfLtUd1aYUXa53Ejaqg7iPvHy/N3ovP44CfAvqSwb8A0D8XXTNe6jP+2kEkfWuYjyc+miGJvadyT3MRlljD2ow9O8DPgHWLF8ZxUgN9QAAAABJRU5ErkJggg=="className='iconos'/>
       
       <h1 className="titulo1">¡Cotiza tu envío en dos simples pasos!</h1>
       
       <form  onSubmit={handleSubmit(onSubmit)}>
        <h2>Informacion del envío</h2>
          <section>
            <label>Identificacion</label>
            <input  
            type = 'text'
            placeholder="Nombre completo / Razon social"
            {...register("nombre",{
              required: true
            })}></input>
             {errors.email?.type === "required" && <p>El nombre es requerido</p>}
          </section>

          <section>
            <label>Desde</label>
            <input  
            type = 'text'
            placeholder="Origen"
            {...register("origen",{
              required: true
            })}></input>
             {errors.email?.type === "required" && <p>El origen es requerido</p>}
          </section>

          <section>
            <label>Hasta</label>
            <input  
            type = 'text'
            placeholder="Destino"
            {...register("destino",{
              required: true
            })}></input>
             {errors.email?.type === "required" && <p>El destino es requerido</p>}
          </section>

          <h2>Detalle del paquete</h2>
          <section>
            <label>Correo electronico</label>
            <input  
            type = 'text'
            placeholder="Email"
            {...register("email",{
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}></input>
             {errors.email?.type === "required" && <p>El email es requerido</p>}
             {errors.email?.type === "pattern" && (
          <p>Debe ingresar un email valido</p>
        )}
          </section>

          <section>
            <input  
            type = 'text'
            placeholder="Ciudad de origen"
            {...register("ciudadOrigen",{
              required: true
            })}></input>
             {errors.email?.type === "required" && <p>La ciudad de origen es requerida</p>}
          </section>
          
          <section>
            <input  
            type = 'text'
            placeholder="Ciudad de destino"
            {...register("ciudadDestino",{
              required: true
            })}></input>
             {errors.email?.type === "required" && <p>La ciudad de destino es requerida</p>}
          </section>

          <button className="login__btn">Siguiente paso</button>
       </form>

       <h1 className="titulo1">¿Ya conoces los planes personalizados que tenemos para vos?</h1>

      <div className='contenedorTarjeta'>
       <div className='tarjeta1'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV9JREFUSEvllP0tRFEQR89WgArQARWgAlSAClABKqADVGBVgAroAB1QATly5+W+8Z68fckmxPyz2dk7c+bjNzthzjaZc376ABfA4YxwY45zTBfgFDiZMXk8PwOMbywDVoBHYBHYAu6BHeAGeAA2S6T+DWAXmBb/HfAGrAMvQcgAH28DtyWx76KjurouX8T6KfjLaoDVWcU7sFZVkas1rqsru38CFqruWwDbWgbyHG3boNUKarLnMpKlauTRmbl83wL8lMi3XQD9AozVAuwU3GMLcAXslaWF3C7TYp2tgdl/UADnZXzXwH4GBD0r1Go0x1Rbn7/VbVbRR5XhtSzNSqzaQ1Jhmio7KqOxc0Xh/sKavH2AsX8hUeDvAngfLtUd1aYUXa53Ejaqg7iPvHy/N3ovP44CfAvqSwb8A0D8XXTNe6jP+2kEkfWuYjyc+miGJvadyT3MRlljD2ow9O8DPgHWLF8ZxUgN9QAAAABJRU5ErkJggg=="className='iconos1'/>
        <h2 >Pimes</h2>
        </div>

        <div className='tarjeta2'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJRJREFUSEvFlVEOgCAMQ8vJ1JvryTQSIYSA6yBj/hG7vXU1EmD8BOP+WAo4AWyCo1dzaFyXDm6yUOXaBZCgyVHvTBluOWABf5nlrGZWJGUWe7sA2BWVDuqaPPxIBq1wVQDq6yBEwxkQvaOkC5AymF6ROYBdgaTzy0CajH2/3gFz4bDTXwD2+l/EFqt0qttJ1fkTmwMeXQ4pGSz6W/gAAAAASUVORK5CYII=" className='iconos1'/>
        <h2>Empresas</h2>
        </div>
        </div>

        <h1 className='titulo1'>Nuestras sucursales</h1>

        <h3 className='titulo2'>Retira y despacha donde mas comodo te quede</h3>

        <h1 className='titulo1'>¿Como lo hago?</h1>
        <ul>
          <li>Selecciona el tipo de envío</li>
          <li>Elegí tu ciudad mas cercana</li>
          <li>Conoce nuestra sucursal mas cercana</li>
        </ul>
       
        <br/>
        <div className='inLine'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbBJREFUSEu1le01REEQRO9GgAgQASJABIgAESASRIAIEAEiIANkQASc63Q7s+PNm7c/zJ+3Zz6qqqt6Zmf885j9Mz5TCNaAE2AH2AxBL8AjcAm8jYnsEVwE+BiGe85aG8YIVLkRB28AgZxzWMkpcFhUtDVE0iJI5Z9hTQLXGBJp1VLYJencGCLQ89fYpSrBnTuvMtAW/ZfkOfav15kMEaR6A1SR4AIsV+I+AAVIch125ZnfrUME6X2qvwP2gCfgKE4KuA3cA/tFFZ6dy2KI4CtAck2lelyWnzaq3nlHfe5nchGCFUAyRxK8x++FCOwKy68tcv44CK6iu9IiL+FD2Ojv0QwyMLvEwFWrt9pUDlvYDtImm8Eu875kTk2LDO02Dqa/kkhWPhWC5jPhdxU4AGyK0QpczANaYkVjQ8VaVubRJcgqDNUqMtyayLvhpfT7R32rixIkw/a72ygh74x3ZC7c3D/22KlKqwxXm7KD8mw2g2Gb0WCVvee6fMxKkhJc5a3HcNIfTk1iZWbUe2mbbTpkd0ni+iTwXsg1kSTZsrZm05Yp96DT+tOXeyFPR2rs/AZz92gZw5u8WQAAAABJRU5ErkJggg=="className='iconos2'/>
       <button className='login__btn2'>Buscar sucursal</button>
       </div>

       <h1 className='titulo1'>¡Registrate y conocé todo lo que podes hacer con tus envios!</h1>
        <h3>Completá tus datos y controlá lo que sucede con tus paquetes </h3>
    
        <div className='lista'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV9JREFUSEvllP0tRFEQR89WgArQARWgAlSAClABKqADVGBVgAroAB1QATly5+W+8Z68fckmxPyz2dk7c+bjNzthzjaZc376ABfA4YxwY45zTBfgFDiZMXk8PwOMbywDVoBHYBHYAu6BHeAGeAA2S6T+DWAXmBb/HfAGrAMvQcgAH28DtyWx76KjurouX8T6KfjLaoDVWcU7sFZVkas1rqsru38CFqruWwDbWgbyHG3boNUKarLnMpKlauTRmbl83wL8lMi3XQD9AozVAuwU3GMLcAXslaWF3C7TYp2tgdl/UADnZXzXwH4GBD0r1Go0x1Rbn7/VbVbRR5XhtSzNSqzaQ1Jhmio7KqOxc0Xh/sKavH2AsX8hUeDvAngfLtUd1aYUXa53Ejaqg7iPvHy/N3ovP44CfAvqSwb8A0D8XXTNe6jP+2kEkfWuYjyc+miGJvadyT3MRlljD2ow9O8DPgHWLF8ZxUgN9QAAAABJRU5ErkJggg==" className='iconos3'/>
        <h3 className='textoInterior' >Retiralo en sucursal</h3>
        </div>

        <div className='lista'>    
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATNJREFUSEvtlGFRA0EMRl8VgAQcgAOKAnAAKCgoKDgABYACwAE4AAW1AA6YN5PrbHd2LwdM/zV/btrb/V7yJbkZW47ZlvXZAVKHp1i0DyyAM+AoFD+AF+Ae+BqjZABFHwAhrVD8GnjsQcYAij/HxXfgBniL3767AE6By78AzHgVmZvhXSdDLdOubvQqMNsl8BreZ820muOoZuNsD2BWh8BJYUsPorh9MuyFlq2jBJQHa7Gn8Lz+v3VnA1JX0LrwG/EhgTWkZVEJ6YmXlQzT9lnsSdOi8pKQeceW2iZH1wbfxihPanJ5SNAw/7W4VpwD38BBa6uzTR4EBDi6Lpwh1DH2qbjP5j5kAK1yyfY6Mzoq7p0M4Bm3+ioWzt0wbKhgP3j/+thlG5y+n1JBKjJ2YAdI7fsB6p82GUOUm7kAAAAASUVORK5CYII=" className='iconos3'/>
        <h3 className='textoInterior1'>Modificá los datos de envío</h3>
        </div>

        <div className='lista'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPNJREFUSEvtldENwjAQQ90JgAmACYANYBOYDDaBEWADmAA2ALlKpOi4pE6lSHzQv/ZyflbiSzs0frrG+qgBTAGcg6EdgJdiTgVE8XUQvQKQIAogFb8FwAqABBkCWPFtAFwASJASwBOP+86aBMkBSuLxbCWIB1DEZYgF1IhLkBRgozhTsw6AvU8vwimAsWMy4jOUMDtn7+QDtTZ8bwXgvPRD6bmMTmKN2T8CWBjLdwCHEFeWbF+/XAFQaJ65d1hbhtpogNvoOP4Dvs7LbsnvbBFvzInyt3LWPGycvZgy96dCNHNsiu+TucjOwUjzflvtfVMN/wCUvlMZx+RBFQAAAABJRU5ErkJggg==" className='iconos3'/>
        <h3 className='textoInterior1'>Cambia el método de envío</h3>
        </div>


        <button className='login__btn3'>Registrate ahora</button>

        <h2>¿Nesecitas ayuda?</h2>
        <h4>Lee nuestras preguntas frecuentes y resolvé tus dudas</h4>
        <button className='login__btn1'>Preguntas frecuentes</button>

        <h2>Nuestras redes</h2>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg=="/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUxJREFUSEu1lYFNwzAQRV8nYATKBMAE7QgwAXQCYALoBLQTABMAGzAC3QA2gAlAP7Ktw7V9DlJOsiIl9r3z+ftnxsQxmzg/PYBLYAGchKGa3sN4AV5bRbYAZ8A9MHd2+QHcAILtRQ2wAa5Gtk9rBPoTJcB/ksekW+DaEnKA2vLcqPwzJLDtuANuzZpz264coH4eVgDf4ZA1x0YO0PejOMECpJaHRvVPgObEWAZ16alhI+3CAh6BiwZgDahahdfKVIwFSNvHnYC8Lfky5TrVSwv4cWRpd+ABUu4egHfb38JZ5PUN6+zimoI8wBdwkGXfRVvpOWQPUGpt8ZA9mY45gxUgVe65aeui9QJ025NBjrGKXkDTKrSrmtn1AFyzi2Io3WoPkFvJkMv74Wg30fxqgJLDJtV6EtREqUtmpgs1KKPyrmgEPQDHQdqfJwf8ArJlSRlOmzLXAAAAAElFTkSuQmCC"/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlbsuRFEUhr9pNFPQaDRDLy4vwLwBSokErQTxBHgDxNQukSh5AzyBywugVqmU5Je15WTZ+5x9ZnIyuztnr/X/a/3rsls0fFoN4zM0gjlgF+gCkxVZvgH3wDHw5G1jGWwAZ31KtwmcF309gSJ/7BM8uM0XM/EEYl+vQfAJLJuU++Z3AUiF3+MJpGcnQSBHaTxmdVEg+lbEIrkxP2FMpQi+I+DPBiDHcbv/ACSnMh41UhH/w/UZxAgUzQSwBiwCsnkAroCvRM3+cKsIgp49YMtldwpsA7fAkrvLJtgDLi3iaQfyAswCB0AocG2JDoET4A6YcQShwAMRBIk0pTuO4AhQhgNJJEy14QiwCiwYiYp8DbQtu+SGqCqyHNWeK5E9oz2l3i+2Z2UNygZNUoRlphnQcMWO5kb30UmuuypiBKWrQqv5NRFZ7u/SZSeQRtd1iFKZqL9VyNTyC7bv9uCobbMenFwpsuyG9iZnRZdj9AO5y0cZdyMG3QAAAABJRU5ErkJggg=="/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSEvNleExBEEQRt9lQATIQAbIgAgQASJABIiADMiAiwARkAEioN5V99aYnZ37dVXXVVNXtzvTX/fr7tkZK7bZiv2zFgL7wDGwG+sbeANegHn8ToLoZbAN3AMK/BRON0JoL7w+AaeAwiObEjDaZ1ggvAWuJkI8B27C+VErm5aAEX5E1IcRea8XDOYB2AJ26kxaAqYsFpesFXR9dlQUeQU8ayaD1QK58TqwWAcPytfoepa4FFBoYbWAvM+AzXCah9xrIUXRs1/gDvBcU8DW08SjlQL/IptQqc+PMpCzm07CgYgsuIjMaplJwJkZ9taIFLCwdk9aZiEeMfXMdr4s0dcCoxTDm86NzN8LIIfQYso8h8z/NorvmzXIItsxdVvmO5250kl2nA59rkgiHtUgmZeHSiQWXwx5TXiF5Lzo1KvloJzo1qBNYSqFDMRlvTIb5+W96MAmIh+OenlJYWVu5GLNbIYjdQZ2z2MU8isOWIuykHnY68OhtMv0M3LuxqlJbgUtOsVEYtQ5jH4T5N+8q2oBmeaw6dD/sjbKbD8j97nLjsmaNUmuxSdz2fXQfb/yDP4AZJloGU7UfncAAAAASUVORK5CYII="/>

    </div>
  )
}

export default Home