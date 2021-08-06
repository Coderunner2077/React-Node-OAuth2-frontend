import React from 'react'
import googleImage from "../../assets/googleImage.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
