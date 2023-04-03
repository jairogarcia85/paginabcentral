
import React from 'react';
import logodos from '../bcentral-logo.png';
import '../estilosFooter.css';

function Header() {

  return (

    <footer id="footer">
        <div id="footer-content">
            <div className="footer-col-1 logo-footer"><img src={logodos}></img>
            
            </div>
            <div className="footer-col-2">
            
                    <p>Bcentral © 2023</p>
               
            </div>
            <div className="footer-col-3">
               
                    <p>info@bcentral.com.mx</p>
            </div>
        </div>
        <div class="f-footer">
            Todos los derechos reservados 2023
        </div>
    </footer>

    
  );
}

export default Header;