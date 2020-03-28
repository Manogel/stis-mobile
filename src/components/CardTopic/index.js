import React from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

import { BorderGradient, Container, Info, Title, Introduction } from './styles';

function CardTopic({ navigation }) {
  return (
    <Container
      onPress={() =>
        navigation.navigate('Detail', { topic: { id: 1, name: 'Ola' } })
      }
    >
      <BorderGradient />
      <Info>
        <Title>AAAaaaaa</Title>
        <Introduction>
          asdasdas dsadasdasdsadas dasdsadasd asdas dasd asd asd asd asda
          sdasdasdasdas
        </Introduction>
      </Info>
      <ADIcon size={25} color="#ccc" name="right" style={{ width: 'auto' }} />
    </Container>
  );
}

export default withNavigation(CardTopic);
