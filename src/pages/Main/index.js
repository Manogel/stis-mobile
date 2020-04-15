import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardTopic from '~/components/CardTopic';
import Header from '~/components/Header';
import Loading from '~/components/Loading';
import MainTopics from '~/components/MainTopics';
import TopicsActions from '~/store/ducks/topics';
import { Background } from '~/styles';

import { Container, BackgroundImage, IdentCards } from './styles';

export default function Main() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.topics.loading);
  const topics = useSelector(state => state.topics.data);

  useEffect(() => {
    dispatch(TopicsActions.getTopicsRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Background>
        <BackgroundImage />
        <Container>
          <MainTopics />
          <IdentCards>
            {topics?.map(topic => (
              <CardTopic key={topic.id} topic={topic} />
            ))}
          </IdentCards>
        </Container>
      </Background>
    </>
  );
}
