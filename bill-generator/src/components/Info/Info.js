import React from 'react';
import styles from './Info.module.css';

const Info = (props) => {
    const userData = props.userData;
    const setUserData = props.setUserData;
    const errorMessage = props.errorMessage;

    function handleChange(event){
        const data = event.target.name;
        const val = event.target.value;

        setUserData({...userData, [data] : val });
    }

    return (
        <div className={styles.infoContainer}>
            <div className={styles.title}>
                Your Information
            </div>
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Name</label><br></br>
                    <input className={styles.input} type="text" placeholder='Enter name' name='name' onChange={handleChange}></input>
                    <div className={styles.errorMessage}>{errorMessage.name}</div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email</label><br></br>
                    <input className={styles.input} type="email" placeholder='Enter email' name='email' onChange={handleChange}></input>
                    <div className={styles.errorMessage}>{errorMessage.email}</div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Phone</label><br></br>
                    <input className={styles.input} type="number" placeholder='Enter contact no' name='phone' onChange={handleChange}></input>
                    <div className={styles.errorMessage}>{errorMessage.phone}</div>
                </div>
            </div>
        </div>
    );
};

export default Info;