import React from 'react';

import { Container, Author, Welcome, Instructions } from './styles';

const Main = () => (
  <Container
    source={{
      uri:
        'https://i.pinimg.com/564x/ae/46/ea/ae46ea4952fe1e707e25bdaa9bcded79.jpg',
    }}
    resizeMode="cover"
  >
    <Author>
      <Welcome>Github.com/Manogel</Welcome>
      <Welcome style={{ marginTop: 15 }}>
        Welcome to the advanced model!
      </Welcome>
    </Author>

    <Instructions>Favorite this repository</Instructions>
    <Instructions>You can start by editing the file:</Instructions>
    <Instructions style={{ fontWeight: 'bold', marginTop: 5 }}>
      src/pages/Main/index.js
    </Instructions>
  </Container>
);

export default Main;
