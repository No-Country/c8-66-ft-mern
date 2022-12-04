import React from "react";
import { useForm } from "react-hook-form";

const DetailSearch = () => {
    return(
        <div className="contenedorDetailSearch">
            <div className="icon_user"></div>
            <h1 className="titulo">¡Rastreá tu envio!</h1>
            <h2>Conocé donde está tu paquete</h2>
            <h2>Modificá datos de envío</h2>
            <h2>¡Recibilo y disfruta!</h2>
            <h1>Informacion de tu paquete</h1>
            <div>numero</div>
            <h1>Datos de tu paquete</h1>
            <form>
                <h2>Datos de tu paquete</h2>
                <h2>Informacion del remitente</h2>
                <section>
                    <label>Nombre del remitente</label>
                    <input></input>
                </section>
                <section>
                    <label>Dirección de retiro</label>
                    <input></input>
                </section>
                <section>
                    <label>Contacto</label>
                    <input></input>
                </section>

                <h2>Informacion del destinatario</h2>
                <section>
                    <label>Nombre del destinatario</label>
                    <input></input>
                </section>
                <section>
                    <label>Dirección de entrega</label>
                    <input></input>
                </section>
                <section>
                    <label>Contacto del destinatario</label>
                    <input></input>
                </section>
            </form>
            <h1>Estado de tu paquete</h1>
            <h2>El paquete fue entregado</h2>
            <h2>El paquete será entregad pronto</h2>
            <h3>*Los envíos pueden sufrir modificaciones por situaciones especiales y/o ajenas a nuestra empresa</h3>
            <h3>Si sucede algún iconveniente, te avisaremos mediante un correo electrónico</h3>
            <div className='card'>
                <div className='subCard'>
                <img src='smart-executive-asian-woman-white-dress-meeting-with-coworker-with-laptop-presentation-office-background_609648-1928.jpg'className='imagenCard'/>
                <h2 className='tituloCard'>¿Nesecitas ayuda?</h2>
                <h4 className='tituloCard1'>Lee nuestras preguntas frecuentes y resolvé tus dudas</h4>
                <button className='boton'>Preguntas frecuentes</button>
            </div>
        </div>
        </div>
    )
}

export default DetailSearch