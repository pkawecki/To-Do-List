import styles from './Container.scss';
import React from 'react';

function Container(props){
  return <div className = {styles.component}>
    {props.children}
  </div>;
}

export default Container;