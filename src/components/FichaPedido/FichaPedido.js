import React from 'react';
import Listapedidos from '../Listapedidos/Listapedidos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Listadatos from '../Listadatos/Listadatos';


class FichaPedido extends React.Component {

    render() {

        return (
            <>
             <div>

                <Row style={{margin:'20px'}}>
                <Col xs={12} md={6}>
                <p><h5>RESÚMEN DE PEDIDOS</h5></p>
                {this.props.pedido}
                </Col>
                
                <Col xs={12} md={5} >
                <p><h5 class='float' style={{marginRight:'px'}}>DATOS CLIENTE </h5></p>
                {this.props.datos}
                </Col>
                </Row>
            </div>
            </>
        )
    }
}

export default FichaPedido;