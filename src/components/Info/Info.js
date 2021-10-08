import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore'; 

const Info = () => (
  <Container>
    <Hero imageSource={settings.info.image} titleText={settings.info.text}/>
    <h2>Info</h2>
    <p>Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla bla bla 
        bla bla bla bla bla bla bla bla bla 
    </p>
  </Container>
);

export default Info;