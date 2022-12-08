import React, {useState} from "react";
import {useSelector} from 'react-redux';

const DetailSearch = (data) => {
    const shipping = useSelector((state)=>state.getShipping);
    const [observacion, setObservacion] = useState(false)
    console.log( "Soy shipping detail",shipping) 



let ship = shipping.shipping_status_histories

let mensaje = ''

if (ship[0].id === 1) {
    mensaje = 'Iniciado'
} else if (ship[0].id === 2) {
    mensaje = 'Cancelado'
} else if (ship[0].id === 3) {
    mensaje = 'En espera para recoger en domicilio'
} else if (ship[0].id === 4) {
    mensaje = 'En centro de distribucion'
} else if (ship[0].id === 5) {
    mensaje = 'En posesion del cartero'
} else if (ship[0].id === 6) {
    mensaje = 'En espera para retirar en sucursal'
} else if (ship[0].id === 7) {
    mensaje = 'Entregado'
}


    return(
        <div className="contenedorDetailSearch">
            <div className="persona" >
            <img src="LogoPersona.png" className="logoPersona"/>
            <img src="PERSONAS.png" className="PERSONA"/>
            </div>
            <div className="icon_user"></div>
            <div className="ola">
                <h1 className="titulo">¡Rastreá tu envio!</h1>
            </div>
                <div className="lista">
                <img src="Vector.png" className="vector"/>
                <h2 className="tituloLista">Conocé donde está tu paquete</h2>
                <img src="Vector.png" className="vector"/>
                <h2 className="tituloLista">Modificá datos de envío</h2>
                <img src="Vector.png" className="vector"/>
                <h2 className="tituloLista">¡Recibilo y disfruta!</h2>
            </div>

            <h1 className="titulo1">Informacion de tu paquete</h1>
            <div>Numero de envío: {shipping.id}</div>

            <h1 className="titulo2">Datos de tu paquete</h1>
            <form className="formulario">
                <h2 className="tituloGris">Informacion del remitente</h2>
                <h2 className="tituloGris">Informacion del destinatario</h2>
                <section className="subtitulo">
                    <label >Nombre del remitente</label>
                    <div className="datoForm">{shipping.origin_name?shipping.origin_name:"No se cargó el nombre"}</div>
                </section>
                <section className="subtitulo">
                    <label>Nombre del destinatario</label>
                    <div className="datoForm">{shipping.destiny_name?shipping.destiny_name:"No se cargó el nombre"}</div>
                </section>
                <section className="subtitulo">
                    <label>Dirección de retiro</label>
                    <div className="datoForm">{shipping.origin_address?shipping.origin_address:"No se cargó la direccrión"}</div>
                </section>
                <section className="subtitulo">
                    <label>Dirección de entrega</label>
                    <div className="datoForm">{shipping.destiny_address?shipping.destiny_address:"No se cargó la dirección"}</div>
                </section>

                <section className="subtitulo">
                    <label>Contacto</label>
                    <div className="contacto">
                    <input></input>
                    <input></input>
                    <div className="datoForm">{shipping.origin_phone?shipping.origin_phone:"No se cargó el telefono"}</div>
                    </div>
                </section>
               
                <section className="subtitulo">
                    <label>Contacto del destinatario</label>
                    <div className="contacto">
                    <input></input>
                    <input></input>
                    <div className="datoForm">{shipping.destiny_phone?shipping.destiny_phone:"No se cargó el telefono"}</div>
                    </div>
                </section>
            </form>

            <h1 className="titulo3">Estado de tu paquete</h1>

            <div className="lista2">
            <img src="Paquete.png" className="elipce"/>
            <h2 className="titulolista2">El estado del envio es: {mensaje}</h2>
            <img src="mdi_truck-check.png" className="elipce"/>
            </div>

            <h3>*Los envíos pueden sufrir modificaciones por situaciones especiales y/o ajenas a nuestra empresa</h3>
            <h3 className="titulo4">Si sucede algún iconveniente, te avisaremos mediante un correo electrónico</h3>
            <div className="rectangulo">
            <div className='card'>
                <div className='subCard'>
                <img src='smart-executive-asian-woman-white-dress-meeting-with-coworker-with-laptop-presentation-office-background_609648-1928.jpg'className='imagenCard'/>
                <h2 className='tituloCard'>¿Nesecitas ayuda?</h2>
                <h4 className='tituloCard1'>Lee nuestras preguntas frecuentes y resolvé tus dudas</h4>
                <button className='boton'>Preguntas frecuentes</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default DetailSearch