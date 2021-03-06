import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
//import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
// import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array.isRequired,
  }
  

  render() {
    const {title, subtitle, lists } = this.props;
    return ( 
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}> {title}</h1>
          <h2 className={styles.subtitle}> {subtitle}</h2>
          {lists.map(list => (
            <ListLink key={list.id} {...list} />
          ))}
        </main>

      </div>
    );
  }
}

export default Home;