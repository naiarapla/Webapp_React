import React from 'react';
import axios from 'axios';
import clases from './Formulario.module.css';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';

class Formulario extends React.Component {
    state = { 
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: '',
        cp:'',
        poblacion: '',
        pais: '',
        grabado: false
    }
    grabaPedido = () => {
        const data = { datos:
           { nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            email: this.state.email,
            //telefono: parseInt(this.state.telefono),
            telefono: this.state.telefono,
            direccion: this.state.direccion,
            cp: this.state.cp,
            poblacion:  this.state.poblacion,
            pais: this.state.pais},

            pedido:this.props.Pedidos

        };
       
        if((this.state.nombre!=='')&&(this.state.apellidos!=='')&&(this.state.email!=='')&&(this.state.telefono!=='')&&(this.state.direccion!=='')&&(this.state.cp!=='')&&(this.state.población!=='')&&(this.state.pais!=='')){
        axios.post('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json', data)
            .then(response => {
                alert('Tú pedido se ha realizado con éxito.');
                this.setState({grabado:true});
           })
            .catch(err => {
            console.log(err);
            
        });}else{
            alert('Por favor para continuar, rellene todos los campos.');
        }
    }
    //refresh = () => {
      //  window.location.reload(false);

    //}
    grabarefresh = () =>{
      this.grabaPedido();
      this.props.limpiar();
       // this.refresh();
    }
    render() {
        let redireccion = null;
        if(this.state.grabado){
           redireccion = (<div><Redirect to="/agradecimiento" /></div>);
        }
        
        return (
            <div className={clases.Formulario}>
            <>
                {redireccion}
                <h1>Dirección de entrega</h1>
                <div>
                    <label>Nombre: </label>
                    <input type="text"
                        value={this.state.nombre}
                        onChange={(event) => this.setState({ nombre: event.target.value })} />
                </div>
                <div>
                    <label>Apellidos: </label>
                    <input type="text"
                        value={this.state.apellidos}
                        onChange={(event) => this.setState({ apellidos: event.target.value })} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text"
                        value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })} />
                </div>
                <div>
                    <label>Teléfono: </label>
                    <input type="text"
                        value={this.state.telefono}
                        onChange={(event) => this.setState({ telefono: event.target.value })} />
                </div>
                <div>
                    <label>Dirección de envío: </label>
                    <input type="textarea"
                        value={this.state.direccion}
                        onChange={(event) => this.setState({ direccion: event.target.value })} />
                </div>
                <div>
                    <label>Código postal: </label>
                    <input type="textarea"
                        value={this.state.cp}
                        onChange={(event) => this.setState({ cp: event.target.value })} />
                </div>
                <div>
                    <label>Población: </label>
                    <input type="textarea"
                        value={this.state.poblacion}
                        onChange={(event) => this.setState({ poblacion: event.target.value })} />
                </div>
                <div>
                    <label>País: </label>
                    <input type="textarea"
                        value={this.state.pais}
                        onChange={(event) => this.setState({ pais: event.target.value })} />
                </div>
                <Button  onClick={this.grabarefresh}>Realizar pedido</Button>
            </>
            </div>
        )
    }
}

export default Formulario;