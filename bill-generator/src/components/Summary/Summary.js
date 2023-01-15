import React from 'react';
import styles from './Summary.module.css';

const Summary = () => {
    return (
        <div className={styles.summaryContainer}>
            <div className={styles.title}>
                Summary
            </div>
            <div className={styles.info}>
                <span className={styles.datatype}>Name :</span> Ankit Prakash<br></br>
                <span className={styles.datatype}>Email :</span> prakashankit526@gmail.com<br></br>
                <span className={styles.datatype}>Phone :</span> +91 857463783<br></br>
                <span className={styles.datatype}>Plan :</span> Arcade<br></br>
                <span className={styles.datatype}>Total :</span> $9<br></br>
                <hr></hr>
                <span className={styles.datatype}>Grand Total :</span> $9<br></br>
            </div>
        </div>
    );
};

export default Summary;