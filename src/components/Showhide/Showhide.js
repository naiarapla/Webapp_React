import React from 'react';
import Button from 'react-bootstrap/Button';

class Showhide extends React.Component {
    render() {
        return (
            <div>
                <Button variant="warning" onClick={this.props.mostrarocultar}>+ Añadir</Button>
            </div>
        )
    }
}

export default Showhide;