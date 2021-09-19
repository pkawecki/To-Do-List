import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things !!!</p>
    }
    render() {
        return ( 
        <div id="list">
            <section className={styles.component}>
                <h2> <Hero titleText={this.props.title} imageSource = {this.props.imageAddress}/> </h2> 
                <div className={styles.description}>
                 {this.props.children}
                </div>
            <div className={styles.columns}>
                <Column columnTitle = "firstCol" />
                 <Column columnTitle = "scondCol"/>
                <Column columnTitle = "thirdCol"/>
            </div>
            </section>
            
        </div>
        )
    }
}

export default List;