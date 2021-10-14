import React from 'react';
import styles from './SearchResults.scss' ;
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from './Icon';
import Container from '../Container/Container';

class SearchResults extends React.Component {
    
    static propTypes = {
      addCard: PropTypes.func,
    }
   
    render(){
      console.log(this.props);
      const {cards} = this.props;

      console.log(cards[0]);
      const title = 'search results';
      return(
        
        <Container>
          <section className ={styles.component}>
            <h3 className={styles.title} > {title} 
              <span className={styles.icon}><Icon name={'search'}/></span>
            </h3>
            {cards.map((card) => {
              return <Card key={card.id} title={card.title} />;
            }) 
            }
          </section>
        </Container>
      );
    }
}
export default SearchResults;