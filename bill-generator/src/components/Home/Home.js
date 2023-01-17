import React from 'react';
import GeneratorField from '../GeneratorField/GeneratorField';

import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.body}>
            <GeneratorField />
        </div>
    );
};

export default Home;