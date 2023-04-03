
import React from 'react';
import logodos from '../bcentral-logo.png';
import '../estilosNavBar.css';

function Header() {

  return (

    <nav>
  <div class="logo"><img src={logodos} alt="logo de BCentral"></img></div>
  <input type="checkbox" id="menu-toggle" />
  <label for="menu-toggle" class="menu-icon">&#9776;</label>
  <ul class="menu">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Clientes</a></li>
    <li><a href="#">Filosofía</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>

    
  );
}

export default Header;