import React from 'react';
import styles from './Step.module.css';

const Step = (props) => {
    console.log(props.stepNumber === props.step);
    return (
        <div className={styles.stepContainer}>
            <div className={props.stepNumber === props.step ? styles.circleSelected : styles.circle}>
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