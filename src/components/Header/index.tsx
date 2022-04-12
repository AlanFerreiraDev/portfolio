import React from 'react';
import NavLink from '../NavLink';

import { Container, List } from './styles';

const Header = () => (
  <Container>
    <List>
      <NavLink title="Home" path="/" />
      <NavLink title="Projetos" path="/projetos" />
    </List>
  </Container>
);

export default Header;
