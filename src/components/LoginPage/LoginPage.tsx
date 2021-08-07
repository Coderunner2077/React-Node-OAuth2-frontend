import React from 'react'
import googleImage from "../../assets/googleImage.png";
import facebookImage from "../../assets/facebookImage.png";
import githubImage from "../../assets/githubImage.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
    const apiURI = "http://localhost:4000/auth";
    const googleLogin = () => {
        window.open(`${apiURI}/google`, "_self");
    }

    const facebookLogin = () => {
        window.open(`${apiURI}/facebook`, "_self");
    }

    const githubLogin = () => {
        window.open(`${apiURI}/github`, "_self");
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={`${styles.loginButton} ${styles.google}`} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>
                <div className={`${styles.loginButton} ${styles.facebook}`} onClick={facebookLogin}>
                    <img src={facebookImage} alt="Facebook Icon" />
                    <p>Login With Facebook</p>
                </div>
                <div className={`${styles.loginButton} ${styles.github}`} onClick={githubLogin}>
                    <img src={githubImage} alt="Githun Icon" />
                    <p>Login With Github</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
