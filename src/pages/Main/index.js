import React from 'react';
import { View } from 'react-native';

import CardTopic from '~/components/CardTopic';
import Header from '~/components/Header';

import { Container, BackgroundImage, IdentCards } from './styles';

export default function Main() {
  return (
    <>
      <Header />

      <BackgroundImage />
      <Container>
        <IdentCards>
          {[1, 1, 1, 1, 11, 1, 1, 1, 1].map(i => (
            <CardTopic />
          ))}
        </IdentCards>
      </Container>
    </>
  );
}
