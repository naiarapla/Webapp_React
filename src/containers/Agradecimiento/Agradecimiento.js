import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import clases from './Agradecimiento.module.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class Agradecimiento extends React.Component {
 refresh = () => {
       window.location.reload(false);

    }
    render() {
        //className={clases.Agradecimiento}>
        return (
            <div className={clases.Agradecimiento}> 
            <h1>GRACIAS POR REALIZAR TU PEDIDO!</h1>
            <Row style={{margin:'20px'}}>
            <Col xs={12} md={7}>
            <p><h5> TU PEDIDO</h5></p>
              {this.props.Pedidos}
            </Col>
            
            <Col xs={12} md={4} >
            <p><h5 class='float-right' style={{marginRight:'px'}}>RESÚMEN DEL PEDIDO REALIZADO:</h5></p>
            <p class='float' style={{padding:'3px'}}> SUBTOTAL {this.props.precio}€</p>
            <p class='float'>ENVIO GRATUITO</p>
            <p class='float'>IMPORTE TOTAL {this.props.precio}€</p>
            <p class='float'><Link to='/'><Button>Realizar un nuevo pedido</Button></Link></p>
            </Col>
          </Row>
            </div>

           
        )
    }
}

export default Agradecimiento;