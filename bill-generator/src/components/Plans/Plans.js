import React from 'react';
import styles from './Plans.module.css';
import PlanBox from '../PlanBox/PlanBox';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

const Plans = () => {
    return (
        <div className={styles.plansContainer}>
            <div className={styles.title}>Select your plan</div>
            <div className={styles.subtitle}>You have the option of monthly and yearly billing.</div>
            <div className={styles.boxContainer}>
                <PlanBox />
                <PlanBox />
                <PlanBox />
            </div>
            <div className={styles.btn}>
                Monthly <SwitchComponent /> Yearly
            </div>
        </div>
    );
};

export default Plans;