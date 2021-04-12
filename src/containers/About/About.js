import React from 'react';
import clases from './About.module.css';
import Image from 'react-bootstrap/Image';
class About extends React.Component {
    render() {
        return (
            <>
             <div className={clases.About}>
                <h1>Sobre nosotros</h1>
                <p style={{margin:'30px'}}>
                            RackWave es una empresa dedicada a la venta online de ropa. Nuestro objetivo es ofrecer la moda más actual a los mejores precios.
                            Tenemos a su disposición una gran variedad de productos, los cuales son renovados cada temporada para dar siempre las prendas más trendy.
                            Tenemos un equipo que está dedicado a satisfacer tus necesidades y que te contestará a tus dudas con la mayor brevedad posible. 
                            Para una mejor comunicación puedes contactar con nosotros a través de WhatsApp o mensaje privado de Facebook y tan sólo en unos minutos tu duda será resuelta.
                 </p>
                <Image style={{height:'150px', width:'auto'}} src="https://cdn.worldvectorlogo.com/logos/quiksilver-10.svg"  roundedCircle/>
              </div>
            </>

        )
    }
}

export default About;