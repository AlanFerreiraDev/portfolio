import React from 'react';

import picture from 'assets/picture.png';

import { Container, TextContainer } from './styles';

const HomeHero = () => (
  <Container>
    <img src={picture} alt="Owner" />
    <div>
      <TextContainer>
        <h1>Olá</h1>
        <h2>Me chamo Alan</h2>
      </TextContainer>
    </div>
  </Container>
);

export default HomeHero;
