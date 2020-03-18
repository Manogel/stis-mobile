import React from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';

import { BorderGradient, Container, Info, Title, Introduction } from './styles';

export default function CardTopic() {
  return (
    <Container>
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
