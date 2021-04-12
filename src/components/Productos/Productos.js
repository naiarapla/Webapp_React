import React from 'react';
import Producto from './Producto/Producto';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import CardDeck from 'react-bootstrap/CardDeck';

class Productos extends React.Component {
    componentDidMount() {
        console.log('<Productos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Productos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                
                <CardDeck style={{marginLeft:'28px',marginTop:'0px'}}>
                {this.props.products.map((product, id) => {
                    return <ErrorBoundary key={id}><Producto nombre={product.nombre}
                        precio={product.precio}
                        imagen={product.imagen}
                        cantidad={product.cantidad}
                        id={product.idb}
                        add={() => this.props.add(id)}
                        borrar={() => this.props.borrar(id)}
                        quantity={() => this.props.quantity()} />
                    </ErrorBoundary>
                })}
               </CardDeck>
               
            </React.Fragment>
        )
    }
}

export default Productos;