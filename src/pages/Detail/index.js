import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import api from '~/services/api';
import { Background } from '~/styles';

import {
  Container,
  BackgroundImage,
  MainHeader,
  Button,
  ButtonName,
  HtmlView,
  ImageContent,
  Footer,
  Description,
} from './styles';

export default function Detail({ navigation: { getParam, goBack } }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(1);
  const language =
    useSelector(state => state.topics.language) === 1 ? 'br' : 'en';
  const { id, name } = getParam('topic');

  useEffect(() => {
    api.get(`/topics/${id}`).then(response => {
      setTopic(response.data);
      setLoading(false);
    });
  }, [id]);

  const renderImages = useMemo(
    () =>
      topic?.files?.length > 0 ? (
        topic.files?.map(file => (
          <ImageContent
            key={file.id}
            source={{
              uri: file.url,
            }}
          >
            <Footer>
              <Description>{file[`description_${language}`]}</Description>
            </Footer>
          </ImageContent>
        ))
      ) : (
        <Description>Não há imagens!</Description>
      ),
    [language, topic]
  );

  const renderContent = useMemo(
    () =>
      page === 1 ? (
        <HtmlView html={topic[`description_${language}`]} />
      ) : (
        renderImages
      ),
    [language, page, renderImages, topic]
  );

  return (
    <>
      <Header title={name} goBack={goBack} />
      <Background>
        <MainHeader>
          <Button active={page === 1} onPress={() => setPage(1)}>
            <ButtonName active={page === 1}>Informações</ButtonName>
          </Button>
          <Button active={page === 2} onPress={() => setPage(2)}>
            <ButtonName active={page === 2}>Imagens</ButtonName>
          </Button>
        </MainHeader>
        <BackgroundImage />
        <Container>{loading ? <Loading /> : renderContent}</Container>
      </Background>
    </>
  );
}
