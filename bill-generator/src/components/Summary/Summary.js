import React from 'react';
import styles from './Summary.module.css';

const Summary = (props) => {
    const userData = props.userData;
    const planType = props.planType;

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.title}>
                Summary
            </div>
            <div className={styles.info}>
                <span className={styles.datatype}>Name :</span> {userData.name}<br></br>
                <span className={styles.datatype}>Email :</span> {userData.email}<br></br>
                <span className={styles.datatype}>Phone :</span> {userData.phone}<br></br>
                <span className={styles.datatype}>Plan :</span> {planType.planName}<br></br>
                <span className={styles.datatype}>Total :</span> ${planType.price}<br></br>
                <hr></hr>
                <span className={styles.datatype}>Grand Total :</span> ${planType.price}<br></br>
            </div>
        </div>
    );
};

export default Summary;