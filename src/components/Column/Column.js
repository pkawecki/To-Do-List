import React from 'react';
import styles from './Column.scss' ;
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from './Icon';
import { settings } from '../../data/dataStore';
class Column extends React.Component {
    
    static propTypes = {
      title: PropTypes.node.isRequired,
      addCard: PropTypes.func.isRequired,
    }

    static defaultProps ={
      icon: settings.defaultColumnIcon,
    }
   
    render(){
      const {title, icon, cards, addCard} = this.props;
      console.log(this.props);
      return(
        
        <section className ={styles.component}>
          <h3 className={styles.title} > {title} 
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>
          {cards.map((card) => {
            return <Card key={card.id} title={card.title} />;
          }) 
          }
          <Creator text={settings.cardCreatorText} action={addCard} />
        </section>
      );
    }
}
export default Column;