import React from "react";
import SendForm from "../shipping/SendForm";

const Shipping = () => {
  return (
    <div className="shipping">
      <header className="shipping_header">
        <section >
          <div className="container-icon-user">
            <div className="icon_user">
              <i className="fa-solid fa-user"></i>
            </div>
            <p>PERSONAS</p>
          </div>
          <main>
            <h2>¡Cotiza y envía tus paquetes de la manera más sencilla!</h2>

          </main>
        </section>
        <section className="right-header">
          <img className="img-mobile" src="../img/shipping-img-mobile.png" alt="" />
<div>
<h2>¿Ya conoces nuestra opción pick up?</h2>
          <div className="container_points">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <h3>¡AHORA ES MÁS FACIL!</h3>
            <h4>¡Coordina dia y horarío para que retiremos tu envío por tu dirección!</h4>
</div>
<div>
</div>
            </section>
            

      </header>
      <div className="tilte-form">
        <h2>¿Qué quieres enviar?</h2>
      </div>
      <article className="container_form">
        <section>
          <header>
            <h3>Envío manual</h3>
          </header>
          <main className="header-style_title relative">
            <span></span>
            <section className="container-title">
              <div className="circle"></div>
              <h3>Origen del envío</h3>
              <p>Completá tus datos</p>
            </section>
            <section className="container-title position_title">
              <div className="circle"></div>

              <h3>Destino del envío</h3>
              <p>Completá los datos del destinatario</p>
            </section>
          </main>
        </section>


      
        <div className="client_form">
          <SendForm />
    
        </div>
      </article>

    </div>
  );
};

export default Shipping;
