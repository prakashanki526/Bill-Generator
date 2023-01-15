import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={props.style === "dark" ? styles.dark : styles.light}>
            {props.name}
        </div>
    );
};

export default Button;