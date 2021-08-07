import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { myContext } from '../../AuthContext';
import { useContext } from 'react';

function Navbar() {
    const currentUser = useContext(myContext);
    console.log(currentUser);
    return (
        <nav className={styles.navbarWrapper}>
            <ul className={styles.navbar}>
                <li><Link to="/">Home</Link></li>
                {!currentUser && (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
