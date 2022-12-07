import React from "react";

const DetailSearch = (data) => {

// const{info}=props
console.log("Soy info detail",data)

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
            <div>numero</div>

            <h1 className="titulo2">Datos de tu paquete</h1>
            <form className="formulario">
                <h2 className="tituloGris">Informacion del remitente</h2>
                <h2 className="tituloGris">Informacion del destinatario</h2>
                <section className="subtitulo">
                    <label >Nombre del remitente</label>
                    <input></input>
                </section>
                <section className="subtitulo">
                    <label>Nombre del destinatario</label>
                    <input></input>
                </section>
                <section className="subtitulo">
                    <label>Dirección de retiro</label>
                    <input></input>
                </section>
                <section className="subtitulo">
                    <label>Dirección de entrega</label>
                    <input></input>
                </section>

                <section className="subtitulo">
                    <label>Contacto</label>
                    <div className="contacto">
                    <input></input>
                    <input></input>
                    <input></input>
                    </div>
                </section>
               
                <section className="subtitulo">
                    <label>Contacto del destinatario</label>
                    <div className="contacto">
                    <input></input>
                    <input></input>
                    <input></input>
                    </div>
                </section>
            </form>

            <h1 className="titulo3">Estado de tu paquete</h1>

            <div className="lista2">
            <img src="Paquete.png" className="elipce"/>
            <h2 className="titulolista2">El paquete fue entregado</h2>
            <img src="mdi_truck-check.png" className="elipce"/>
            <h2 className="titulolista2">El paquete será entregad pronto</h2>
            <img src="Ellipse 54.png" className="elipce1"/>
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