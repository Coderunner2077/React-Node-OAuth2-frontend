import React from 'react'
import googleImage from "../../assets/googleImage.png";
import facebookImage from "../../assets/facebookImage.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
    const loginGoogle = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    }

    const loginFacebook = () => {
        window.open("http://localhost:4000/auth/facebook", "_self");
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={loginGoogle}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>
                <div className={styles.facebookContainer} onClick={loginFacebook}>
                    <img src={facebookImage} alt="Google Icon" />
                    <p>Login With Facebook</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
