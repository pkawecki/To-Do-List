import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
    
    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array.isRequired,
      addColumn : PropTypes.func.isRequired,
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }

    
    render() {
      const {title,image,description, columns, addColumn} = this.props;
      console.log(columns);
      return (
        <div id="list">
          <section className={styles.component}>
            <h2> <Hero titleText={title} imageSource={image} /> </h2>
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map( column => (
                <Column key={column.id} {...column} />
              ))}
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn}/>
            </div>
          </section>

        </div>
      );
    }
}

export default List;