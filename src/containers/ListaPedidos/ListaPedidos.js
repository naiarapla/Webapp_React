import React from 'react';
import Listapedidos from '../../components/Listapedidos/Listapedidos';
import Listadatos from '../../components/Listadatos/Listadatos';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import axios from 'axios';

class ListaPedidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          listadatos:[],
          listapedido:[],
        }
      }
      componentDidMount() {
        console.log('<ListaPedidos> se ha montado');
      
        axios.get('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json')
          .then(response => {
            let listadatos = [];
            for (let key in response.data) {
              listadatos.push({
                nombre: response.data[key].datos.nombre,
                apellidos: response.data[key].datos.apellidos,
                email: response.data[key].datos.email,
                direccion: response.data[key].datos.direccion,
                cp: response.data[key].datos.cp,
                telefono: response.data[key].datos.telefono,
                poblacion: response.data[key].datos.poblacion,
                pais: response.data[key].datos.pais,
                idb: key
              });
            }
            this.setState({ listadatos: listadatos});
            let listapedido = [];
            //for(var i=0; i<this.state.listapedido.length+1; i++){
            for (let key in response.data) {
              listapedido.push({
                nombre:response.data[key].pedido[0].nombre,
                imagen:response.data[key].pedido[0].imagen,
                precio:response.data[key].pedido[0].precio,
                cantidad:response.data[key].pedido[0].cantidad,
                idb: key
              });
            }
            this.setState({ listapedido: listapedido});
          //}
          }).catch(error => {
            this.setState({ error: true });
          });
        
      }
      componentWillUnmount() {
        console.log('<ListaPedidos> se va a desmontar');
      }

      borrapedido = (id, idb) => {
        //axios.delete('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + idb + '.json?auth=' + this.props.idToken)
        alert('¿Esta seguro de que desea borrar el pedido?');
        axios.delete('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + idb + '.json')
        .then(response => {
         
            console.log(response);
          });
        let listapedido = [...this.state.listapedido];
        listapedido.splice(id, 1);
        this.setState({ listapedido: listapedido });

        let listadatos = [...this.state.listadatos];
        listadatos.splice(id, 1);
        this.setState({ listadatos: listadatos });
      }
    render() {
        let listdatos = null;
         listdatos = (
      <Listadatos
        datos={this.state.listadatos} 
        />
    );

    let listpedido = null;
    listpedido = (
    <Listapedidos
    pedir={this.state.listapedido}
    borrar={this.borrapedido}
    />
    );
        return (
            <>
            <div style={{alignItems:'center'}}>
            <p><h5>RESÚMEN DE PEDIDOS</h5></p>
            <p>{listpedido}</p>
            
            {/*<Col xs={12} md={5} >
            <p><h5 class='float' style={{marginRight:'px'}}>DATOS CLIENTE </h5></p>
             {listdatos}
        </Col>*/}
    
          </div>
            </>
        )
    }
}

export default ListaPedidos;