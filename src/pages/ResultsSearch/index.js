import React from 'react';

import CardTopic from '~/components/CardTopic';
import Header from '~/components/Header';
import { Background } from '~/styles';

import { Container, BackgroundImage, IdentCards, TitleSession } from './styles';

export default function ResultsSearch({ navigation: { goBack } }) {
  return (
    <>
      <Header goBack={goBack} />
      <Background>
        <BackgroundImage />
        <Container>
          <TitleSession>Resultados encontrados</TitleSession>
          <IdentCards>
            <CardTopic />
          </IdentCards>
        </Container>
      </Background>
    </>
  );
}
