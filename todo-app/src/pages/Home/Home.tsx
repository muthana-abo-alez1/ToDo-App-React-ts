import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return <div className={styles.home}>
        <TodoApp/>
    </div>
};

export default Home;