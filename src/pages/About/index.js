import React, { useEffect, useState, useMemo } from 'react';

import Header from '~/components/Header';
import api from '~/services/api';
import { Background } from '~/styles';

import {
  Container,
  BackgroundImage,
  TitleSession,
  Card,
  BorderGradient,
  Info,
  Title,
  Introduction,
  Bottom,
} from './styles';

export default function About({ navigation: { goBack } }) {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    api.get('/references').then(response => {
      setReferences(response.data);
    });
  });

  const renderList = useMemo(
    () =>
      references.map(r => (
        <Info key={r.id}>
          <Title>{r.title}</Title>
          <Introduction>{r.description}</Introduction>
        </Info>
      )),
    [references]
  );

  return (
    <>
      <Header title="Sobre o APP" goBack={goBack} />
      <Background>
        <BackgroundImage />
        <Container>
          <TitleSession>Projeto</TitleSession>
          <Card>
            <BorderGradient sex={0} />
            <Info>
              <Title>Ciely Ramos</Title>
              <Introduction>
                Graduanda do curso de ciências biológicas na universidade
                federal do Ámapa!
              </Introduction>
            </Info>
          </Card>
          <TitleSession>Aplicação</TitleSession>
          <Card>
            <BorderGradient sex={1} />
            <Info>
              <Title>Manoel Gomes</Title>
              <Introduction>
                Graduando do curso de ciência da computação na universidade
                federal do Ámapa!
              </Introduction>
            </Info>
          </Card>
          <TitleSession>Referências</TitleSession>
          <Card style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <BorderGradient />
            {renderList}
          </Card>
          <Bottom>
            <Title>Conhecendo as IST's</Title>
            <Introduction>V 1.0.0</Introduction>
          </Bottom>
        </Container>
      </Background>
    </>
  );
}
