import React from "react";
import styles from './Column.scss' ;
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import Creator from "../Creator/Creator";
import Icon from "./Icon";
import { settings } from "../../data/dataStore";

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }
    static propTypes = {
        columnTitle: PropTypes.node.isRequired,
        //key: PropTypes.node.isRequired,
    }
    addCard(title){
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                        title
                    }
                ]
            }
        ))
    }
    render(){
        
        return(
            <section className ={styles.component}>
                <h3 className={styles.title} > {this.props.title} 
                <span className={styles.icon}><Icon name={this.props.icon}/></span>
                </h3>
                <Card cards={this.state.cards} />
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
            </section>
        )
    }
}
export default Column;