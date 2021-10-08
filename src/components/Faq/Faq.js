import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

function Faq() {
  return (
    <Container>
      <Hero imageSource={settings.faq.image} titleText={settings.faq.text}/>
      <h2>Info</h2>
      <p>Lorem ipsum dolor sit amet, bla bla bla bla bla bla bla bla bla 
            bla bla bla bla bla bla bla bla bla 
      </p>
    </Container>
  );
}

export default Faq;