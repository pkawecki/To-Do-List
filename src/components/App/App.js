import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
//import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';


class App extends React.Component {
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
            <List key={list.id} {...list} />
          ))}
        </main>

      </div>
    );
  }
}

export default App;