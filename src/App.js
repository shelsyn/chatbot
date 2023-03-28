/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import SimpleForm from './SimpleForm';
import './App.css';

const App = () => {
  const [showChat, setShowChat] = useState(false);

  const startChat = () => setShowChat(true);
  const hideChat = () => setShowChat(false);

  return (
    <>
      <div className="header">
  <div className="logo-container">
    <img src="./hospital.png" alt="Logo del Hospital San Juan" className="logo" />
  </div>
  <nav className="menu">
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Especialidades</a></li>
      <li><a href="#">Equipo médico</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
  <div className="cta-container">
    <a href="#" className="button">Cerrar  sesión</a>
  </div>
</div>

      <div className="main">
        <div className="nav">
          
        </div>
        <div className="content">
          <h2>Bienvenidos al Hospital San Juan</h2>
          <p>En nuestro hospital, estamos dedicados a brindar atención médica de calidad a nuestros pacientes.
            Nos enorgullece ofrecer una amplia gama de servicios de atención médica y siempre nos esforzamos por mejorar
            la calidad de nuestros servicios.</p>
          <h3>Nuestros servicios</h3>
          <ul>
            <li>Cardiología</li>
            <li>Oncología</li>
            <li>Ginecología</li>
            <li>Neurología</li>
            <li>Pediatría</li>
            <li>Psiquiatría</li>
          </ul>
          <h3>Nuestros doctores</h3>
          <p>Nuestros médicos y especialistas están altamente capacitados y cuentan con años de experiencia en sus respectivos campos.
            Estamos comprometidos a brindar atención médica de la más alta calidad a nuestros pacientes.</p>
          <ul>
            <li>Dr. Juan Perez - Cardiólogo</li>
            <li>Dr. Maria Rodriguez - Oncólogo</li>
            <li>Dr. Carlos Gomez - Ginecólogo</li>
            <li>Dr. Pedro Hernandez - Neurólogo</li>
            <li>Dra. Ana Torres - Pediatra</li>
            <li>Dra. Sofia Ramirez - Psiquiatra</li>
          </ul>
        </div>
      </div>
      <div className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src="./hospital.png" alt="Hospital San Juan" />
    </div>
    <div className="footer-links">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Doctores</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <ul>
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2023 Hospital San Juan. Todos los derechos reservados.</p>
  </div>
</div>

      <div className="bot">
        <div style={{ display: showChat ? '' : 'none' }}>
          <SimpleForm />
        </div>
        <div>
          <button className="btn" onClick={() => setShowChat(!showChat)}>
            {showChat ? 'Oculta el chat' : 'Habla con un representante'}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
