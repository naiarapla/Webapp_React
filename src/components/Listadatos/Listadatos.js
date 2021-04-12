import React from 'react';
import Listadato from './Listadato/Listadato';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import CardDeck from 'react-bootstrap/CardDeck';

class Listadatos extends React.Component {
    componentDidMount() {
        console.log('<Listadatos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Listadatos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                {this.props.datos.map((dato, id) => {
                    return <ErrorBoundary key={id}>
                        <Listadato nombre={dato.nombre}
                        apellidos={dato.apellidos}
                        email={dato.email}
                        direccion={dato.direccion}
                        cp={dato.cp}
                        telefono={dato.telefono}
                        poblacion={dato.poblacion}
                        pais={dato.pais}
                        id={dato.idb} 
                       />
                    </ErrorBoundary>
                })}
            </React.Fragment>
        )
    }
}

export default Listadatos;