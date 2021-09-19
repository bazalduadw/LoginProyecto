import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import { Avatar } from '@material-ui/core';
import Boton from '../elements/Boton';
import styles from '../assets/css/ProfileAndLogOut.module.css'


const ProfileAndLogOut = () => {
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
    }, []);


    let nombre = cookies.get('nombre');
    let avatarNombre = nombre.charAt(0);

    return ( 
        <div className={styles.container_navbar_profile}>
            <Avatar className={styles.avatar}>{avatarNombre}</Avatar>
            <Boton onClick={()=> cerrarSesion()}>Cerrar Sesión</Boton>
        </div>
    );
}
 
export default ProfileAndLogOut;