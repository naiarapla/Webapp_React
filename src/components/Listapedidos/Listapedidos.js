import React from 'react';
import Listapedido from './Listapedido/Listapedido';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import CardDeck from 'react-bootstrap/CardDeck';

class Listapedidos extends React.Component {
    componentDidMount() {
        console.log('<Listapedidos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Listapedidos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                <CardDeck>
                {this.props.pedir.map((pedid, id) => {
                    return <ErrorBoundary key={id}>
                        <Listapedido nombre={pedid.nombre}
                        precio={pedid.precio}
                        imagen={pedid.imagen}
                        cantidad={pedid.cantidad}
                        borrar={() => this.props.borrar(id, pedid.idb)}
                        id={pedid.idb} 
                       />
                    </ErrorBoundary>
                })}
            </CardDeck>
            </React.Fragment>
        )
    }
}

export default Listapedidos;