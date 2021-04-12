import React from 'react';
import {
    withRouter
} from "react-router-dom";
import axios from 'axios';
import FichaPedido from '../../components/FichaPedido/FichaPedido';
import Listapedidos from '../../components/Listapedidos/Listapedidos';
import Listadatos from '../../components/Listadatos/Listadatos';


class DetallesPedido extends React.Component {
    state = {
        listadatos:[],
        listapedido:[],
    }

    componentDidMount() {
        console.log('<DetallesPedido> se ha montado');
        const id = this.props.match.params.id;
        axios.get('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                {/*const listadatos = [];
                for (let key in response.data) {
                  listadatos.push({
                    ...response.data[key].datos,
                    idb: key
                  });
                }
                this.setState({ listadatos: listadatos[0]});
                const listapedido = [];

                for(var i=0; i<this.state.listapedido.length+1; i++){
                for (let key in response.data) {
                    listapedido.push({
                        ...response.data[key].pedido[0],
                        idb: key
                    });
                }
                this.setState({listapedido: listapedido[0]}); 
               }*/}

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
            for(var i=0; i<this.state.listapedido.length+1; i++){
            for (let key in response.data) {
              listapedido.push({
                nombre:response.data[key].pedido[i].nombre,
                imagen:response.data[key].pedido[i].imagen,
                precio:response.data[key].pedido[i].precio,
                cantidad:response.data[key].pedido[i].cantidad,
                idb: key
              });
            }
            this.setState({ listapedido: listapedido});
          }
          }).catch(error => {
            this.setState({ error: true });
            });
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
        const id = this.props.match.params.id;
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
                <h1>Ficha pedido</h1>
                <FichaPedido datos={listdatos} pedido={listpedido} /> 
            </>
        )
    }
}

export default withRouter(DetallesPedido);