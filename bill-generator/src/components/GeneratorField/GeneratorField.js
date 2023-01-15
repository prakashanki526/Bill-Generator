import React from 'react';
import styles from './GeneratorField.module.css';
import Info from '../Info/Info';
import Button from '../Button/Button';
import Step from '../Step/Step';
import Plans from '../Plans/Plans';
import Summary from '../Summary/Summary';

const GeneratorField = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Step step="1" stepname="YOUR INFO" />
                <Step step="2" stepname="SELECT PLAN" />
                <Step step="3" stepname="SUMMARY" />
            </div>
            <div className={styles.right}>
                {/* <Info /> */}
                {/* <Plans /> */}
                <Summary />
                <div className={styles.btns}>
                    <div>
                        <Button style="light"/>
                    </div>
                    <div>
                        <Button style="dark" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratorField;