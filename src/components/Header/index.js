import React from 'react';
import FTIcon from 'react-native-vector-icons/Fontisto';

import { Container, Title, ButtonLeft, UnisexIcon } from './styles';

export default function Header() {
  return (
    <Container>
      <ButtonLeft>
        <FTIcon color="#fff" size={24} name="nav-icon-grid-a" />
      </ButtonLeft>
      <Title>Conhecendo as IST`s</Title>
      <UnisexIcon />
    </Container>
  );
}
