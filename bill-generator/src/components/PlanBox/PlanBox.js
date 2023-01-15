import React from 'react';
import styles from './PlanBox.module.css';

const PlanBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}></div>
            <div className={styles.plantype}>
                Arcade
            </div>
        </div>
    );
};

export default PlanBox;