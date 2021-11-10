import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import RelatedCourses from "./RelatedCourses";
import CourseSession from "./CourseSession";
import Modal from "react-modal";
// import FormSignUp from "../Forms/FormSignUp";
import instructor from "./i-angelo.jpg";
import bbva from "./bbva.jpg";
import bcp from "./bcp.png";
import interbank from "./interbank.png";
import plin from "./plin.png";
import yape from "./yape.png";

const Course = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [isOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const { name, description, image } = props;

  return (
    <>
      <Helmet htmlAttributes>
        <html lang="es" />
        <title>Crea tu propia tienda online | Innodesign</title>
        <meta
          name="description"
          content="Aprende a administrar productos, hacer ofertas, cupones,
                  configurar pasarelas de pago y publicar tu tienda desde el
                  primer día."
        />
        <meta
          property="og:title"
          content="Crea tu propia tienda online | Innodesign"
        />
        <meta
          property="og:description"
          content="Aprende a administrar productos, hacer ofertas, cupones,
      configurar pasarelas de pago y publicar tu tienda desde el
      primer día."
        />
        <meta
          property="og:image"
          content="https://www.innodesign.academy/static/media/bg-ecommerce.59489356.jpg"
        />
      </Helmet>
      <section className="course">
        <div className="course__banner ecommerce">
          <div className="container">
            <div className="banner__content">
              <div className="course__image">
                {/* <img src={courseImage} alt="" /> */}
                {/* <FormSignUp /> */}
                {/* <a onClick={toggleModal}>Ver opciones de pago</a> */}
              </div>
              <div className="course__description">
                <h1>Creando tu propia tienda online</h1>
                <p>
                  Aprenderás a administrar productos, hacer ofertas, cupones,
                  configurar pasarelas de pago y publicar tu tienda desde el
                  primer día.
                </p>
                {/* <small>
                  <span className="icon icon-user"></span> 103 inscritos
                </small>
                <small>
                  <span className="icon icon-time"></span> 05 días | + 5 horas
                  de clase | Asesoría individual
                </small> */}
                <h4>Horarios</h4>
                <ul>
                  <li>Lunes y Miercoles 08:00 PM</li>
                  <li>Sábado 10:00 AM</li>
                </ul>
                {/* <button onClick={toggleModal}>
                  Cómpralo ahora por S/50.00
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="course__info">
          <div className="container">
            <div className="course__top">
              <div className="course__presentation has-shadow">
                <p>
                  Con este curso aprenderás a crear tu tienda en línea.
                  Obtendrás muy rapido los fundamentos para hacer ventas online
                  y saber cómo vender en Internet. El curso está compuesto de
                  clases en vivo y incluye también tutorias individuales para
                  resolver dudas y ayudarte a implementar tu tienda.
                </p>
                <p>
                  Todas las clases del curso son prácticas. El alumno trabaja
                  con su propio proyecto real y desarrolla su propia tienda
                  online. Desde los primeros pasos configurando tu tienda hasta
                  crear tu catálogo de productos.
                </p>
                <p>
                  Todos los alumnos terminan el curso con su tienda online
                  creada y configurada. Ideal para lanzar tu propio negocio y
                  empezar a vender por Internet.
                </p>

                <h2>Metodología</h2>
                <ul>
                  <li>Tutor personal</li>
                  <li>Metodología 100% virtual</li>
                  <li>Clases en vivo</li>
                </ul>

                <h2>Lo que aprenderás</h2>
                <ul>
                  <li>Armar tu propia tienda online(woocommerce)</li>
                  <li>
                    Crearás tu catálogo de productos, datos de facturación y
                    pago, página de seguimiento de pedidos, carrito de compra
                    actualizado en tiempo real, menús de categorias, ofertas y
                    mucho más.
                  </li>
                  <li>
                    Aprenderás a editar y hacer todos los cambios que necesites
                    o desees hacer en un futuro.
                  </li>
                </ul>

                {/* <h2>Inversión</h2>
                <ul className="price">
                  <li>
                    <span>S/100 soles</span>
                    <span>S/50 soles</span>
                  </li>
                  <li>Certificado Digital de participación</li>
                </ul> */}
              </div>
            </div>
            <div className="course__bottom">
              <div className="course__sessions has-shadow">
                <h2>Estas son las clases</h2>
                <div className="sessions__list">
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>1. Primeros pasos en WooCommerce</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Presentación del curso"
                        duration="01:00"
                      />
                      <CourseSession
                        name="¿Qué es y por qué utilizar WooCommerce?"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Instalando WooCommerce"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Entendiendo cómo funciona WooCommerce"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>2. Gestión de productos</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Creando productos"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Creando un combo de productos"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Creando un producto variable"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Creando un producto digital"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Categorías de productos"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Importando productos masivamente"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>3. Diseño de tu tienda</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Configurando las páginas de tu tienda"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Agregando un menú principal a tu página"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Conociendo las plantillas"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Te regalo para mi, el mejor tema a usar en una tienda (BONUS)"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>4. Configuraciones de tu tienda</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Flujo de pedido y compra en tu tienda"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Creando cupones de descuento"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Configurando tus usuarios"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Configurando el envío de pedidos"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Configurando las notificaciones de email"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>5. Métodos de pago</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Configurando distintos métodos de pago"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Configurando Paypal"
                        duration="01:00"
                      />
                      <CourseSession
                        name="Configurando Mercado Pago"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>6. Últimos pasos</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Conclusiones del curso y siguientes pasos"
                        duration="01:00"
                      />
                    </div>
                  </div>
                  <div className="course-session__group">
                    <div className="group__title">
                      <h3>7. Tutoría</h3>
                    </div>
                    <div className="group__sessions">
                      <CourseSession
                        name="Asesoría INDIVIDUAL con el instructor"
                        duration="01:00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__extras">
                <div className="extras__content">
                  <div className="extras__instructor has-shadow">
                    <h2>Instructor</h2>
                    <div className="instructor__image">
                      <img src={instructor} alt="" />
                    </div>
                    <div className="instructor__info">
                      <h4>Angelo Leva</h4>
                      <p>
                        Ingeniero de software especialista en tecnologías web.
                        Desde el 2012 me dedico a desarrollar soluciones basadas
                        en tech y capacitar usuarios para múltiples
                        instituciones, tanto públicas como privadas.
                      </p>
                    </div>
                  </div>
                  <div className="extras__requirements has-shadow">
                    <h2>Requisitos previos</h2>
                    <ul>
                      <li>Ninguno</li>
                    </ul>
                  </div>
                  <div className="extras__features">
                    <h2>Continúa aprendiendo</h2>
                    <RelatedCourses />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="test"
        className="modal"
        overlayClassName="modal__overlay"
      >
        <div className="modal__content">
          <p>
            Tenemos para ti múltiples opciones disponibles para que puedas ser
            parte de esta nueva era digital:
          </p>
          <ul>
            <li>
              <img src={bbva} alt="" />
            </li>
            <li>
              <img src={bcp} alt="" />
            </li>
            <li>
              <img src={interbank} alt="" />
            </li>
            <li>
              <img src={plin} alt="" />
            </li>
            <li>
              <img src={yape} alt="" />
            </li>
          </ul>
          <p>
            También puedes <b>pagar en un link con VISA</b>, escríbenos para
            ayudarte!
          </p>
          <p>
            Elige la que más se acomode a ti y cuéntanos cuál es para poder
            ayudarte a realizar el pago.
          </p>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </Modal>
    </>
  );
};
export default Course;
