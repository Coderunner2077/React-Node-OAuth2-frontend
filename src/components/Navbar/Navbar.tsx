import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { myContext } from '../../AuthContext';
import { useContext } from 'react';
import axios from "axios";

function Navbar() {
    const currentUser = useContext(myContext);
    
    const logout = () => {
        axios.get("https://react-node-oauth2-backend.herokuapp.com/auth/logout", { withCredentials: true })
            .then((res) => {
                if(res.data === "success") {
                    window.location.href= "/";
                }
            })
            .catch(err => {
                console.log("error", err.toString());
            })
    }
    return (
        <nav className={styles.navbarWrapper}>
            <ul className={styles.navbar}>
                <li><Link to="/">Home</Link></li>
                {currentUser ? (
                    <li onClick={logout}>Logout</li>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
