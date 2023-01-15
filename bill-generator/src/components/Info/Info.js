import React from 'react';
import styles from './Info.module.css'

const Info = () => {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.title}>
                Your Information
            </div>
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Name</label><br></br>
                    <input className={styles.input} type="text" placeholder='Enter name'></input>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email</label><br></br>
                    <input className={styles.input} type="text" placeholder='Enter email'></input>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Phone</label><br></br>
                    <input className={styles.input} type="text" placeholder='Enter contact no'></input>
                </div>
            </div>
        </div>
    );
};

export default Info;