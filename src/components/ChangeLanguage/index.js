import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import brazil from '~/assets/icons/brazil.png';
import usa from '~/assets/icons/usa.png';

import {
  Container,
  Background,
  Header,
  ButtonClose,
  Title,
  Option,
  ItemImage,
  Name,
  Divider,
} from './styles';

export default function ChangeLanguage({ visible, setVisible }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Background>
        <Container>
          <Header>
            <Title>Selecione seu idioma</Title>
            <ButtonClose
              hitSlop={{ right: 5, top: 5, bottom: 5, left: 5 }}
              onPress={() => setVisible(false)}
            >
              <Icon name="close" size={22} color="#ccc" />
            </ButtonClose>
          </Header>

          <Option>
            <ItemImage source={brazil} />
            <Name>Português</Name>
          </Option>
          <Divider />
          <Option>
            <ItemImage source={usa} />
            <Name>Inglês</Name>
          </Option>
        </Container>
      </Background>
    </Modal>
  );
}
