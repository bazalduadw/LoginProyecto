import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import '../assets/css/styles.css';
import Logo from '../components/Logo/Logo';


const Login = () => {

    const baseUrl="http://localhost:3001/usuarios";
    const cookies = new Cookies();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e) => {
        if(e.target.name === 'username'){
            setUsername(e.target.value)
        } else if (e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {setUsername: username, setPassword: md5(password)}})
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

    useEffect(() => {
        if(cookies.get('username')){
            window.location.href="./menu"
        }
    })

    return ( 
        <div className='container'>
            <div className="container1">
                <div>
                    <Logo />
                </div> 
                <div className='formLogin'>
                    <input
                        type="text"
                        placeholder="Usuario"
                        className="inputForm"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        className="inputForm"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                    <div class="ContenedorBotonEnviar">
                        <button className="enviar" onClick={() => iniciarSesion()}>LOGIN</button>
                    </div>
                </div>
            </div>
            <div class="container2">
                {/* AQUI VA EL BACJGROUND IMG */}
            </div>
        </div>
     );
}
 
export default Login;