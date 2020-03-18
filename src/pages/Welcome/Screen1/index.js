import React from 'react';

import { Container, Title, SubTitle, Button, ButtonText } from './styles';

export default function Screen1({ navigation: { navigate } }) {
  return (
    <Container>
      <Title>Conhecendo as IST's</Title>

      <SubTitle>
        Bem vindo(a) ao seu aplicativo de informações sobre as doenças
        sexualmente transmissíveis!
      </SubTitle>

      <Button onPress={() => navigate('WelcomeScreen2')}>
        <ButtonText>Vamos lá</ButtonText>
      </Button>
    </Container>
  );
}
