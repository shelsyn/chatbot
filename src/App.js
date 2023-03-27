import React, { useState } from 'react';
import SimpleForm from './SimpleForm';
import './App.css';

const App = (props) => {
const [showChat, setShowChat] = useState(false);
const sql = require('mssql');
const config = {
  user: 'shelsyn',
  password: 'Luna3006099054-',
  server: 'tu-servidor.database.windows.net',
  database: 'tu-base-de-datos',
  options: {
    encrypt: true
  }
};

const startChat = () => { setShowChat(true); }
const hideChat = () => { setShowChat(false); }

return (
<>
<div className="header">
<h1>Hospital San Juan</h1>
</div>
<div className="main">
<div className="nav">
<ul>
<li><a href="#">Inicio</a></li>
<li><a href="#">Servicios</a></li>
<li><a href="#">Doctores</a></li>
<li><a href="#">Contacto</a></li>
</ul>
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
<p>© 2023 Hospital San Juan. Todos los derechos reservados.</p>
</div>
<div className="bot">
<div style={{display: showChat ? "" : "none"}}>
<SimpleForm />
</div>
<div>
{!showChat ? (
<button className="btn" onClick={() => startChat()}>
Habla con un representante
</button>
) : (
<button className="btn" onClick={() => hideChat()}>
Oculta el chat
</button>
)}
</div>
</div>
</>
);
};

export default App;