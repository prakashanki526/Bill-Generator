import React from 'react';
import styles from './Home.module.css';
import GeneratorField from '../GeneratorField/GeneratorField';

const Home = () => {
    return (
        <div className={styles.body}>
            <GeneratorField />
        </div>
    );
};

export default Home;