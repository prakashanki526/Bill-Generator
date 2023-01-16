import React, { useState } from 'react';
import styles from './GeneratorField.module.css';
import Info from '../Info/Info';
import Button from '../Button/Button';
import Step from '../Step/Step';
import Plans from '../Plans/Plans';
import Summary from '../Summary/Summary';

const GeneratorField = () => {
    const [stepNumber, setStepNumber] = useState(1);
    const [errorMessage, setErrorMessage] = useState({
        name : "",
        email : "",
        phone : ""
    });

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [planType, setPlanType] = useState({planName: "Arcade", price: 9});

    function goBack(){
        if(stepNumber>1){
            setStepNumber(stepNumber-1);
        }
    }

    function nextStep(){
        if(!userData.name){
            setErrorMessage({name: "** Enter name first."});
            return;
        }
        if(!userData.email){
            setErrorMessage({email: "** Enter email first."});
            return;
        }
        if(!userData.phone){
            setErrorMessage({phone: "** Enter phone no first."});
            return;
        }
        if(userData.phone.length !== 10){
            setErrorMessage({phone: "** Enter valid phone number."});
            return;
        }
        if(stepNumber<3){
            setStepNumber(stepNumber+1);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Step step={1} stepname="YOUR INFO" stepNumber={stepNumber} />
                <Step step={2} stepname="SELECT PLAN" stepNumber={stepNumber} />
                <Step step={3} stepname="SUMMARY" stepNumber={stepNumber} />
            </div>
            <div className={styles.right}>
                {stepNumber === 1 && <Info userData={userData} setUserData={setUserData} errorMessage={errorMessage} />}
                {stepNumber === 2 && <Plans planType={planType} setPlanType={setPlanType} />}
                {stepNumber === 3 && <Summary userData={userData} planType={planType} />}
                <div className={styles.btns}>
                    <div onClick={goBack}>
                        <Button style="light" name="Go Back" />
                    </div>
                    <div onClick={nextStep}>
                        <Button style="dark" name={stepNumber === 3 ? "Pay Now" : "Next Step"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratorField;