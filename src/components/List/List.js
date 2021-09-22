import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
    state = {
        columns: this.props.columns || [],
    }
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }
    addColumn(title){
        this.setState(state => (
          {
              columns: [
                  ...state.columns,
                  {
                      key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                      title,
                      icon: 'list-alt',
                      cards: []
                  }
              ]
          }  
        ));
    }
    render() {
        return (
            <div id="list">
                <section className={styles.component}>
                    <h2> <Hero titleText={this.props.title} imageSource={this.props.image} /> </h2>
                    <div className={styles.description}>
                        {ReactHtmlParser(this.props.description)}
                    </div>
                    <div className={styles.columns}>
                        {this.state.columns.map(({ key, ...columnProps }) => (
                            <Column key={key} {...columnProps} />
                            ))}
                    </div>
                    <div className={styles.creator}>
                            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
                    </div>
                </section>

            </div>
        )
    }
}

export default List;