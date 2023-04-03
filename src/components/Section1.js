import React from 'react';
import img1 from '../podcast-img1.jpeg';
import '../Section1.css';

function Section1() {

    return (
  
    <div className="section1-grap">
        <div className="section1">
            <div class="int-sec1">
                <p class="subHeader">BCENTRAL</p>
                <h1>¿Qué es BCentral?</h1>
                <p>Somos un equipo de expertos en el uso de las últimas tecnologías y herramientas de marketing para que tu marca destaque del resto y llegue al siguiente nivel.
                <br/><br/>
                Conectamos con una red de medios de comunicación e influencers que nos acercan a grandes públicos, estamos comprometidos con la innovación, la creatividad y el trabajo duro para proporcionar a nuestros clientes los mejores resultados posibles.</p>
            </div>
            <div class="int-sec2">
                <img src={img1}></img>
            </div>
        </div>
    </div>
  
      
    );
  }
  
  export default Section1;