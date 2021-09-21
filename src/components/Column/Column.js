import React from "react";
import styles from './Column.scss' ;
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        // columnTitle: PropTypes.node.isRequired,
        key: PropTypes.node.isRequired,
    }
    render(){
        return(
            <section className ={styles.component}>
                <h3 className={styles.title} > {this.props.title}</h3>
            </section>
        )
    }
}
export default Column;