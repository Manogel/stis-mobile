import React, { useState } from 'react';

import Header from '~/components/Header';
import { Background } from '~/styles';

import {
  Container,
  BackgroundImage,
  MainHeader,
  Button,
  ButtonName,
  HtmlView,
} from './styles';

export default function Detail({ navigation: { getParam, goBack } }) {
  const [page, setPage] = useState(1);

  const { id, name } = getParam('topic');

  const htmlContent = `<ul><li><strong>Sintomas</strong></li></ul>
<p>As Infec&ccedil;&otilde;es Sexualmente Transmiss&iacute;veis (IST) s&atilde;o causadas por v&iacute;rus, bact&eacute;rias ou outros &nbsp;microrganismos. Elas s&atilde;o transmitidas.As Infec&ccedil;&otilde;es Sexualmente Transmiss&iacute;veis (IST) s&atilde;o causadas por v&iacute;rus, bact&eacute;rias ou outros &nbsp;microrganismos. Elas s&atilde;o transmitidas.<strong><br></strong></p><ul><li><strong><strong>Sobre</strong></strong></li>
</ul>

<p>As Infec&ccedil;&otilde;es Sexualmente Transmiss&iacute;veis (IST) s&atilde;o causadas por v&iacute;rus, bact&eacute;rias ou outros &nbsp;microrganismos. Elas s&atilde;o transmitidas.As Infec&ccedil;&otilde;es Sexualmente Transmiss&iacute;veis (IST) s&atilde;o causadas por v&iacute;rus, bact&eacute;rias ou outros &nbsp;microrganismos. Elas s&atilde;o transmitidas.As Infec&ccedil;&otilde;es Sexualmente Transmiss&iacute;veis (IST) s&atilde;o causadas por v&iacute;rus, bact&eacute;rias ou outros &nbsp;microrganismos. Elas s&atilde;o transmitidas.<strong><strong><br></strong></strong></p>

<p>
	<br>
</p>

`;
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
        <Container>
          <HtmlView html={htmlContent} />
        </Container>
      </Background>
    </>
  );
}
