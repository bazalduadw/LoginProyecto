import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import Logo from '../components/Logo/Logo';
import '../assets/css/Home.css'
import { Button, Avatar } from '@material-ui/core';

const Menu = () => {

    const cookies = new Cookies();

    const cerrarSesion = () => {
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    };

    useEffect(() => {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    });

    console.log('id: '+ cookies.get('id'));
    console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
    console.log('apellido_materno: '+cookies.get('apellido_materno'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('username: '+cookies.get('username'));

    const nombre = cookies.get('nombre')
    const avatarNombre = nombre.charAt(0)

    return ( 
        
        <div className="container_home">
            <div className="sidebar">
                <Logo />
                <br />
                <button onClick={()=> cerrarSesion()}>Cerrar Sesión</button>
                <Button variant="contained" color="secondary">Hello World</Button>
                <Avatar>{avatarNombre}</Avatar>

            </div>
                            
            <div className="container_main">
                <h1>Bienvenido {nombre}</h1>
            </div>        

        </div>
     );
}
 
export default Menu;