import React from 'react';
import PropTypes from 'prop-types';
import Ponclase from '../../../hoc/Ponclase';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
class Listadato extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        //this.state = { elementoInput: React.createRef() };
    }
    componentDidMount() {
        console.log('<Listadato> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Listadato> se va a desmontar');
    }
    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este producto es problemática');
        }
        const enlace = '/' + this.props.id;
        
        return (
            <React.Fragment>
          <Ponclase >
              <div>
              <Table striped bordered hover>
              {/*<thead>
              {/*<tr>
                <th>ID Pedido</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Direccion</th>
              </tr>
                <tr>
                  <th>Nombre</th>
                </tr>
                <tr>
                <th>Apellidos</th>
                </tr>
                <tr><th>Email</th></tr>
                <tr><th>Direccion</th></tr>
                <tr><th>Código Postal</th></tr>
                <tr><th>Telefono</th></tr>
                <tr><th>Poblacion</th></tr>
                <tr><th>País</th></tr>
              </thead>*/}
              <tbody>
                <tr>
                  <td style={{fontWeight:'bold'}}>ID Pedido</td>
                  <td>{this.props.id}</td>
                  </tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Nombre</td>
                  <td>{this.props.nombre}</td>
                  </tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Apellidos</td>
                  <td>{this.props.apellidos}</td>
                  </tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Email</td>
                  <td>{this.props.email}</td>
                  </tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Direccion</td>
                  <td>{this.props.direccion}</td></tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Código postal</td>
                  <td>{this.props.cp}</td> </tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Teléfono</td>
                  <td>{this.props.telefono}</td></tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>Población</td>
                  <td>{this.props.poblacion}</td></tr>
                  <tr>
                  <td style={{fontWeight:'bold'}}>País</td>
                  <td>{this.props.pais}</td></tr>
                
              </tbody>
            </Table>
                  
              </div>
              
        </Ponclase>
            </React.Fragment>
        )
    }
}

Listadato.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    email: PropTypes.string,
    direccion: PropTypes.string,
    cp: PropTypes.string,
    telefono: PropTypes.string,
    poblacion: PropTypes.string,
    pais: PropTypes.string,
}

export default Listadato;