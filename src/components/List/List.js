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
                </section>

            </div>
        )
    }
}

export default List;