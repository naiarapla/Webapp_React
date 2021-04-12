import React from 'react';
import PropTypes from 'prop-types';
import Ponclase from '../../../hoc/Ponclase';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class Listapedido extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        //this.state = { elementoInput: React.createRef() };
    }
    componentDidMount() {
        console.log('<Listapedido> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Listapedido> se va a desmontar');
    }
    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este producto es problemática');
        }
        const enlace = '/detallespedido' + this.props.id;
        const enlace1 = '/detallespedido' + this.props.id;
        let enlaces1 = (
            <>
                <Link to={enlace1}>Ver más detalles de este pedido</Link>
            </>
        );
        
        return (
            <React.Fragment>
          <Ponclase >
              <div>
              <p><h6>Pedido ({this.props.id})</h6></p>
              <Row>
                <Col  xs={12} md={3} style={{ width: '190px', marginLeft:'30px', marginBottom:'10px'}}>
                <img variant="left" src={this.props.imagen} height= '225px'/>
                </Col>

                <Col  xs={12} md={7} style={{ width: '500px', margin:'10px'}}>
                <p>{this.props.nombre}</p>
                <p>Cantidad: {this.props.cantidad}</p>
                <p>{this.props.precio}€ </p>
                <p>{enlaces1}</p>
                <Link to="/"><Button onClick={this.props.borrar}>Borrar</Button></Link>
                </Col>
        
        </Row>
                  
              </div>
              
        </Ponclase>
            </React.Fragment>
        )
    }
}

Listapedido.propTypes = {
    nombre: PropTypes.string,
    precio: PropTypes.number,
    imagen: PropTypes.string,
    cantidad: PropTypes.number,
}

export default Listapedido;