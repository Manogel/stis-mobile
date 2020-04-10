import React from 'react';
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';

import {
  Container,
  Header,
  HeaderText,
  Content,
  Title,
  SubTitle,
} from './styles';

function MainTopics({ navigation }) {
  return (
    <Container>
      <Header>
        <HeaderText>Tópicos mais lidos</HeaderText>
      </Header>
      <Swiper
        loop
        autoplay
        activeDotColor="#428BCC"
        paginationStyle={{
          bottom: 10,
        }}
      >
        {[1, 2, 4].map(t => (
          <Content
            key={t}
            onPress={() =>
              navigation.navigate('Detail', { topic: { id: 1, name: 'Ola' } })
            }
          >
            <Title>O que é uma ist!</Title>
            <SubTitle numberOfLines={3}>
              As Infecções Sexualmente Transmissíveis (IST) são causadas por
              vírus, bactérias ou outros microrganismos. Elas são transmitidas …
              As Infecções Sexualmente Transmissíveis (IST) são causadas por
              vírus, bactérias ou outros microrganismos. Elas são transmitidas …
            </SubTitle>
          </Content>
        ))}
      </Swiper>
    </Container>
  );
}

export default withNavigation(MainTopics);
