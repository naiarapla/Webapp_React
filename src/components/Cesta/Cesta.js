import React from 'react';
import Pedido from '../Pedidos/Pedido/Pedido';
import Pedidos from '../Pedidos/Pedidos';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {
    withRouter
} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cesta extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
    }
    componentDidMount() {
      console.log('<Cesta> se ha montado');
  }
    componentWillUnmount() {
        console.log('<Cesta> se va a desmontar');
    }

    

    render() {

      let boton = (<p class='float'><Link to="/formulario"><Button variant="primary" >Realizar pedido</Button></Link></p>);
      if(this.props.cantidad==0){
        boton = (<p>Su cesta esta vacía</p>);
      }
      
          return(
            <div>

          <Row style={{margin:'20px'}}>
            <Col xs={12} md={7}>
            <p><h5> MI CESTA ({this.props.cantidad})</h5></p>
              {this.props.Pedidos}
            </Col>
            
            <Col xs={12} md={4} >
            <p><h5 class='float-right' style={{marginRight:'px'}}>RESÚMEN DEL PEDIDO: ( {this.props.cantidad} Artículos)</h5></p>
            <p class='float' style={{padding:'3px'}}> SUBTOTAL {this.props.precio}€</p>
            <p class='float'>ENVIO GRATUITO</p>
            <p class='float'>IMPORTE TOTAL {this.props.precio}€</p>
            {boton}
            </Col>
          </Row>
          </div>

        )
    }
}

export default Cesta;