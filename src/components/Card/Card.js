import React from 'react';
import styles from './Card.scss';
class Card extends React.Component {
    static propTypes = {
    }
    render() {
      const {title} = this.props;
      return (
        <section className={styles.component}>
          <li >{title}</li>
        </section>
      );
    }
}
export default Card;
