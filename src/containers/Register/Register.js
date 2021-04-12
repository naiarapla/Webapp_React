import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import clases from './Register.module.css';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {
    state = {
        email: '',
        password: '',
        enviado: false
    }

    registerHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwovrsuKZ-kzWUuvswLg5eQFaKGyvTboI', authData)
            .then(response => {
                this.props.setAuthentication(true, response.data);
                this.setState({enviado: true});
                console.log(response);
            })
            .catch(err => {
                this.props.setAuthentication(false, {});
                alert('Va a ser que no...');
                console.log(err);
            });
    }

    render() {
        let redireccion = null;
        if(this.state.enviado){
            redireccion = (<Redirect to="/" />)
        }

        return (
            <>
            <div className={clases.Register}>
                {redireccion}
                <h1>REGISTRO DE NUEVO USUARIO</h1>
                <div>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                </div>
                <div>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                </div>
                <Button onClick={this.registerHandler}>REGISTRARSE</Button>
                </div>
            </>
        )
    }
}

export default Register;