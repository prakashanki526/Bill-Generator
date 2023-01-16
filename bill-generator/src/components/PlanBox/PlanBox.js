import React from 'react';
import styles from './PlanBox.module.css';

const PlanBox = (props) => {
    const backgroundcolor = props.backgroundColor;
    const planType = props.planType;
    const setPlanType = props.setPlanType;

    function handleClick(){
        setPlanType({planName: props.name, price: props.price});
        console.log(planType);
        console.log(props.name);
    }

    return (
        <div className={planType.planName === props.name ? styles.containerSelected : styles.container} onClick={handleClick}>
            <div className={styles.icon} style={{backgroundColor: backgroundcolor}}>
                {props.icon}
            </div>
            <div className={styles.plantype}>
                {props.name}
                <div className={styles.price}>
                    ${props.price}/month
                </div>
            </div>
        </div>
    );
};

export default PlanBox;