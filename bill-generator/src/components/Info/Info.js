import React, {useState} from 'react';
import styles from './Info.module.css';

const Info = (props) => {
    const errorMessage = props.errorMessage;

    return (
        <div className={styles.infoContainer}>
            <div className={styles.title}>
                Your Information
            </div>
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Name</label><br></br>
                    <input className={styles.input} type="text" placeholder='Enter name'></input>
                    <div className={styles.errorMessage}>{errorMessage.name}</div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email</label><br></br>
                    <input className={styles.input} type="email" placeholder='Enter email'></input>
                    <div className={styles.errorMessage}>{errorMessage.email}</div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Phone</label><br></br>
                    <input className={styles.input} type="text" placeholder='Enter contact no'></input>
                    <div className={styles.errorMessage}>{errorMessage.phone}</div>
                </div>
            </div>
        </div>
    );
};

export default Info;