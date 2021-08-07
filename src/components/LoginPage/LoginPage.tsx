import React from 'react'
import googleImage from "../../assets/googleImage.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
    const login = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={login}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
