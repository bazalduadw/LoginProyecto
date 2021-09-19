import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import Logo from '../components/Logo/Logo';
import { Button, Avatar } from '@material-ui/core';
import Boton from '../elements/Boton';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from '../assets/css/Home.module.css'

const Home = () => {
    // let guardarNombre = localStorage.setItem("nombre", JSON.stringify(nombre));


    return ( 
        
        <div>
            <Navbar />
            <div className="container_sidebar"></div>
            <Sidebar />
        </div>

        
        
     );
}
 
export default Home;