import React from 'react';
import { FlatList } from 'react-native';

import CardTopic from '~/components/CardTopic';
import Header from '~/components/Header';
import MainTopics from '~/components/MainTopics';
import { Background } from '~/styles';

import { Container, BackgroundImage, IdentCards } from './styles';

export default function Main() {
  return (
    <>
      <Header />
      <Background>
        <BackgroundImage />
        <Container>
          <MainTopics />
          <IdentCards>
            {[1, 1, 1, 1, 11, 1, 1, 1, 1].map(i => (
              <CardTopic />
            ))}
          </IdentCards>
        </Container>
      </Background>
    </>
  );
}
