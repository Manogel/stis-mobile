import React, { useMemo } from 'react';
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

import Loading from '../Loading';
import {
  Container,
  Header,
  HeaderText,
  Content,
  Title,
  SubTitle,
} from './styles';

function MainTopics({ navigation }) {
  const loading = useSelector(state => state.topics.loading);
  const language =
    useSelector(state => state.topics.language) === 1 ? 'br' : 'en';
  const topics = useSelector(state => state.topics.data);

  const renderList = useMemo(
    () =>
      topics.slice(0, 3)?.map(t => (
        <Content
          key={t.id}
          onPress={() =>
            navigation.navigate('Detail', {
              topic: { id: t.id, name: t[`title_${language}`] },
            })
          }
        >
          <Title>{t[`title_${language}`]}</Title>
          <SubTitle numberOfLines={3}>{t[`introduction_${language}`]}</SubTitle>
        </Content>
      )),
    [topics, language, navigation]
  );

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <HeaderText>Tópicos mais lidos</HeaderText>
      </Header>
      <Swiper
        loops
        autoplay
        activeDotColor="#428BCC"
        paginationStyle={{
          bottom: 10,
        }}
      >
        {renderList}
      </Swiper>
    </Container>
  );
}

export default withNavigation(MainTopics);
