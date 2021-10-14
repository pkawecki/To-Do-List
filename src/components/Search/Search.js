import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
// import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Column/Icon';
// import Container from '../Container/Container';
import { withRouter } from 'react-router';

class Search extends React.Component {
  
  static defaultProps = {
    text: settings.search.defaultText,
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK(){
    this.props.history.push(`/search/${this.state.value}`);
  }
  render() {
    const {value} = this.state;
    const {icon} = settings.search;
    return (
      // <Container>- maybe a coding mistake, to be inspected
      <div className={styles.component}>
        <input
          type='text'
          value={value}
          onChange={event => this.handleChange(event)}
        />
        <div className={styles.buttons}>
          <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
        </div>
         
      </div>
      // </Container>
    );
  }
}

export default withRouter(Search);
