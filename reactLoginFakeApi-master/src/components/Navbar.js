import React from 'react';
import styles from '../assets/css/Navbar.module.css';
import logo from '../assets/images/logo.png'
import ProfileAndLogOut from './ProfileAndLogOut';

const Navbar = () => {
    return ( 

        <div className={styles.navbar}>
            <img src={logo} className={styles.imagen}></img>
            <ProfileAndLogOut />
        </div>

     );
}
 
export default Navbar;