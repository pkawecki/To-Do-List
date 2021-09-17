import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
    render() {
        return ( 
        <div id="list">
            <section className={styles.component}>
                <h2> <Hero /> </h2> 
            </section>
        </div>
        )
    }
}

export default List;