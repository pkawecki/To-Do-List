import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../Column/Icon';
import Container from '../Container/Container';
import styles from './Header.scss';

class Header extends React.Component {
  render() { 
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'> 
              <Icon name={'search'} />
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <NavLink exact to='/faq'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>);
  }
}
 
export default Header;