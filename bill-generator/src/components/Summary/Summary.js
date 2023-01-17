import React from 'react';
import styles from './Summary.module.css';

const Summary = (props) => {
    const userData = props.userData;
    const planType = props.planType;
    const planDuration = props.planDuration;

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.title}>
                Summary
            </div>
            <div className={styles.info}>
                <div className={styles.datatype}>Name :</div> {userData.name}<br></br>
                <div className={styles.datatype}>Email :</div> {userData.email}<br></br>
                <div className={styles.datatype}>Phone :</div> {userData.phone}<br></br>
                <div className={styles.datatype}>Plan :</div> {planType.planName}<br></br>
                <div className={styles.datatype}>Total :</div> ${planType.price}<br></br>
                <hr></hr>
                <span className={styles.datatype}>Grand Total :</span> ${planDuration ? planType.price*12 : planType.price}<br></br>
            </div>
        </div>
    );
};

export default Summary;