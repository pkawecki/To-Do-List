import React from 'react';
import propTypes from 'prop-types';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div>
    <Header/>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: propTypes.node,
};

export default MainLayout;