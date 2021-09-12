import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import logo from '../assets/opcion-financiera-logo.png';
import styles from '../assets/css/styles.css';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }

    render() {
        return (

        <div className='container'>
            <div className="container1">
                <div>
                    <img src={logo} alt="Logo Opcion Financiera"></img>
                </div>
                
                <div className='formLogin'>
                    <input
                        type="text"
                        placeholder="Usuario"
                        className="inputForm"
                        name="username"
                        onChange={this.handleChange}
                        
                    />
                    <input
                        type="password"
                        className="inputForm"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <div class="ContenedorBotonEnviar">
                        <button className="enviar" onClick={()=> this.iniciarSesion()}>LOGIN</button>
                    </div>
                </div>
            </div> 
            <div class="container2">
                {/* AQUI VA EL BACKGROUND IMG */}
            </div>
        </div>
        );
    }
}

export default Login;