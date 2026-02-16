import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';
import logo from '../assets/logo.png'; // Assuming logo is here

const LoadingScreen = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.logoWrapper}>
                <div className={styles.logoShine}>
                    <img src={logo} alt="GS Technologies Logo" className={styles.loaderLogo} />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
