import React from 'react';
import styles from './Step.module.css';

const Step = (props) => {
    return (
        <div className={styles.stepContainer}>
            <div className={styles.circle}>
                {props.step}
            </div>
            <div className={styles.stepInfo}>
                STEP {props.step}<br></br>
                {props.stepname}
            </div>
        </div>
    );
};

export default Step;