import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={props.style === "dark" ? styles.dark : styles.light}>
            Next Step
        </div>
    );
};

export default Button;