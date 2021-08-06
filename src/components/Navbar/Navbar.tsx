import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.navbarWrapper}>
            <ul className={styles.navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
