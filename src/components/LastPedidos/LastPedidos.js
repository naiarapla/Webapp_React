import React from 'react';
import LastPedido from './LastPedido/LastPedido';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import CardDeck from 'react-bootstrap/CardDeck';

class LastPedidos extends React.Component {
    componentDidMount() {
        console.log('<LastPedidos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<LastPedidos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                <CardDeck>
                {this.props.pedir.map((pedid, id) => {
                    return <ErrorBoundary key={id}>
                        <LastPedido nombre={pedid.nombre}
                        precio={pedid.precio}
                        imagen={pedid.imagen}
                        id={pedid.idb} 
                        cantidad={pedid.cantidad}/>
                    </ErrorBoundary>
                })}
            </CardDeck>
            </React.Fragment>
        )
    }
}

export default LastPedidos;