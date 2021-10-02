import React from 'react';
import styles from './Column.scss' ;
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from './Icon';
class Column extends React.Component {
    
    static propTypes = {
      title: PropTypes.node.isRequired,
      //key: PropTypes.node.isRequired,
    }
   
    render(){
      const {title, icon, cards} = this.props;
      return(
        
        <section className ={styles.component}>
          <h3 className={title} > {title} 
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>
          {cards.map((card) => {
            return <Card key={card.id} title={card.title} />;
          }) 
          }
          {/* <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} /> */}
        </section>
      );
    }
}
export default Column;