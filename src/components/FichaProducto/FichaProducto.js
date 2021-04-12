import React from 'react';
import Image from 'react-bootstrap/Image';

class FichaProducto extends React.Component {

    render() {

        return (
            <>
                <h3>{this.props.datos.nombre}</h3>
                <h6>{this.props.datos.precio}€ </h6>
                <Image style={{height:'500px', width:'auto'}} src={this.props.datos.imagen} fluid />
               
            </>
        )
    }
}

export default FichaProducto;