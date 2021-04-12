import React from 'react';
import clases from './Producto.module.css';
import Cesta from '../../Cesta/Cesta';
import Showhide from '../../Showhide/Showhide';
import Ponclase from '../../../hoc/Ponclase';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        
        //this.state = { elementoInput: React.createRef() };
    }
    state = {enviado:true}
    componentDidMount() {
        console.log('<Producto> se ha montado');
        //this.state.elementoInput.current.focus();
        //this.elementoInput.current.focus();
    }
    componentWillUnmount() {
        console.log('<Producto> se va a desmontar');
    }
    cambiarEstado = () => {
        this.setState({ enviado:true })
    }

    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este producto es problemática');
        }
        const enlace = '/' + this.props.id;

        let redireccion = null;
        if(this.state.enviado){
            redireccion = (<Redirect to="/cesta" />)
        }

       
      let enlaces = (
          <>
              <Link to="/cesta">Añadir</Link>
          </>);
            const enlace1 = '/' + this.props.id;
            let enlaces1 = (
                <>
                    <Link to={enlace1}>Ver detalles</Link>
                </>
            );
        return (
            // <div className={clases.Person}>
            
            <Ponclase >
                <Card style={{ width: '17rem', margin:'10px', height:'525px'}}>
                <Card.Img style={{height:'345px'}} variant="top" src={this.props.imagen} />
                <Card.Body  style={{height:'180px'}}>
                    <Card.Title style={{ fontSize:'15px', height:'50px'}}>{this.props.nombre}</Card.Title>
                    <Card.Text style={{height:'35px'}}>
                    {this.props.precio}€ {enlaces1}
                   
                    </Card.Text>
                    <p><Link to="/cesta"><Button variant="primary"  style={{ fontSize:'15px', height:'35px'}} onClick={() => {this.props.add()}}>+ Añadir</Button></Link> {this.props.cantidad} <Link to="/cesta"><Button  variant="primary"  style={{ fontSize:'15px', height:'35px'}} onClick={() => {this.props.borrar()}}>- Eliminar</Button></Link></p>
                    {/*<Link to="/cesta"><Button style={{ fontSize:'15px', height:'40px'}} variant="primary" onClick={() => {this.props.add()}}>Añadir</Button></Link>*/}
                </Card.Body>
                </Card>
            </Ponclase>
            )
    }
}

Producto.propTypes = {
    nombre: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    imagen: PropTypes.string,
    add: PropTypes.func,
    borrar: PropTypes.func,
    quantity: PropTypes.func
}

export default Producto;