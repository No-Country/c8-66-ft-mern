import React from "react";
import SendForm from "../shipping/SendForm";

const Shipping = () => {
  return (
    <div>
      <main>
        <section>
          <h2>¡Cotiza y envía tus paquetes de la manera más sencilla!</h2>
          <h3>¿Ya conoces nuestra opción pick up?</h3>
          <h3>
            ¡Coordina dia y horario para que retiremos tu envío por tu
            dirección!
          </h3>
        </section>
        <hr />
        <section>
          <p>img</p>|
        </section>
      </main>
      <article>
        <h2>¿Qué quieres enviar?</h2>
        <section>
          <header>
            <h3>Envío manual</h3>
          </header>
          <main>
            <div>
              <div>0</div>
              <hr />
              <div>0</div>
            </div>
            <div>
              <section>
                <h3>
                  Origen del envío
                  <p>Completá tus datos</p>
                </h3>
              </section>
              <section>
                <h3>
                  Destino del envío
                  <p>Completá los datos del destinatario</p>
                </h3>
              </section>
            </div>
          </main>
        </section>
      </article>
      <div>
        <SendForm/>
        <SendForm/>
      </div>
    </div>
  );
};

export default Shipping;
