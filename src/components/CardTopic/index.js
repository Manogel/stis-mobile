import React from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

import { BorderGradient, Container, Info, Title, Introduction } from './styles';

function CardTopic({ navigation, topic }) {
  const language =
    useSelector(state => state.topics.language) === 1 ? 'br' : 'en';
  return (
    <Container
      onPress={() =>
        navigation.navigate('Detail', {
          topic: { id: topic.id, name: topic[`title_${language}`] },
        })
      }
    >
      <BorderGradient />
      <Info>
        <Title>{topic[`title_${language}`]}</Title>
        <Introduction>{topic[`introduction_${language}`]}</Introduction>
      </Info>
      <ADIcon size={25} color="#ccc" name="right" style={{ width: 'auto' }} />
    </Container>
  );
}

export default withNavigation(CardTopic);
