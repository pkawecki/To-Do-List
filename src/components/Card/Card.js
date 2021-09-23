import React from "react";
import styles from './Card.scss';
import PropTypes from 'prop-types';
class Card extends React.Component {
    static propTypes = {
        // key: PropTypes.node.isRequired,
        // this.props.cards[0].title
    }
    render() {
        console.log(this.props.cards);
        return (
            <section className={styles.component}>
                <li >{this.props.title}</li>
            </section>
        )
    }
}
export default Card;
