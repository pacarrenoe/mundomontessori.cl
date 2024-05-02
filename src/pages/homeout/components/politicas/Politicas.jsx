import React from "react";
import "../../styles/politicas.css";
const Politicas = () => {
  return (
    <>
      <section className="policy">
        <div className="policy__title">
          <h1>Políticas de nuestro servicio.</h1>
        </div>
        <div className="policy__description">
          <p>
            Es importante para nosotros, que usted lea <b>detenidamente</b> cada
            punto antes de realizar su compra.
          </p>
        </div>
        <div className="policy__acordeon">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Política de venta y despachos.
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div className="policy__content">
                    <p>
                      Realizamos despachos e instalaciones en las siguientes
                      regiones:
                    </p>
                    <ol>
                      <li>Región Metropolitana.</li>
                      <li>Región de Valparaíso.</li>
                    </ol>
                    <p>
                      Proceso de compra, <b>dentro</b> de las regiones
                      indicadas.
                    </p>
                    <ul>
                      <li>
                        Para realizar un pedido dentro de las regiones
                        mencionadas, solicitamos el <b>abono</b> del valor
                        correspondiente al <b>despacho e instalación</b>. De
                        esta manera, una vez que el producto llega a su
                        domicilio, le pediremos que lo revise detenidamente,{" "}
                        <b>
                          si todo está en orden y cumple con sus expectativas,
                          podrá proceder con el pago.
                        </b>
                      </li>
                      <li>
                        Es importante destacar que{" "}
                        <b>
                          no tenemos la opción de realizar cambios de modelo ni
                          de tamaño una vez que el producto ha sido instalado y
                          pagado.
                        </b>{" "}
                        Por lo tanto, le recomendamos revisar cuidadosamente
                        todas las características y especificaciones del
                        producto antes de realizar la instalación y el pago,
                        para asegurarse de que esté satisfecho con su elección.
                      </li>
                    </ul>
                    <p>
                      Proceso de compra, <b>fuera</b> de las regiones indicadas.
                    </p>
                    <ul>
                      <li>
                        Es importante tener en cuenta que los productos enviados
                        fuera de nuestra zona de despacho deben ser{" "}
                        <b>PAGADOS EN SU TOTALIDAD</b> antes de ser enviados por
                        el servicio de transporte. Nosotros asumimos total
                        responsabilidad si el producto llega roto o dañado
                        durante el transporte, por lo que para su tranquilidad,
                        en caso de algún incidente en el transporte, enviaremos
                        la pieza dañada lo más rápido posible para que pueda
                        realizar la instalación sin problemas.
                      </li>
                      <li>
                        Sin embargo, es importante destacar que{" "}
                        <b>NO SE ACEPTAN DEVOLUCIONES NI CAMBIOS DE PRODUCTO</b>{" "}
                        para los envíos realizados a regiones. Para brindarle
                        mayor seguridad, enviaremos todo tipo de comprobantes
                        antes de que el producto sea enviado. De esta manera,
                        usted podrá verificar y asegurarse de que el producto
                        cumpla con sus expectativas antes de que sea despachado.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Política de devoluciones.
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div className="policy__content">
                    <p>
                      Siguiendo las políticas establecidas en nuestras ventas y
                      despachos, las devoluciones aplican unicamente cuando:
                    </p>

                    <ul>
                      <li>
                        En aquellos casos en los que el cliente no haya
                        efectuado el pago del producto. Es importante tener en
                        cuenta que esta opción solo se encuentra disponible en
                        los lugares en los que nosotros gestionamos el despacho
                        e instalación <b>presencial</b>.
                      </li>
                      <li>
                        Es importante destacar que{" "}
                        <b>
                          no tenemos la opción de realizar cambios de modelo ni
                          de tamaño una vez que el producto ha sido instalado y
                          pagado.
                        </b>{" "}
                        Por lo tanto, le recomendamos revisar cuidadosamente
                        todas las características y especificaciones del
                        producto antes de realizar la instalación y el pago,
                        para asegurarse de que esté satisfecho con su elección.
                      </li>
                    </ul>
                    <p>
                      Proceso de compra, <b>fuera</b> de las regiones indicadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Politicas;
