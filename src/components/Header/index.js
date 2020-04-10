import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import FTIcon from 'react-native-vector-icons/Fontisto';
import { withNavigation } from 'react-navigation';

import ChangeLanguage from '../ChangeLanguage';
import {
  Container,
  Gradient,
  Content,
  Title,
  ButtonLeft,
  UnisexIcon,
  Action,
  LabelAction,
} from './styles';

function Header({ title, goBack, navigation: { navigate } }) {
  const [isActive, setActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [heightProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isActive) {
      Animated.timing(heightProgress, {
        toValue: 100,
        duration: 300,
      }).start();
    } else {
      Animated.timing(heightProgress, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [heightProgress, isActive]);

  const functionLeft = goBack !== false ? goBack : () => setActive(!isActive);

  function renderButtonLeft() {
    if (!goBack && !isActive) {
      return <FTIcon color="#fff" size={24} name="nav-icon-grid-a" />;
    }
    if (goBack) {
      return <FTIcon color="#fff" size={20} name="arrow-left" />;
    }
    return <FTIcon color="#fff" size={24} name="minus-a" />;
  }

  return (
    <Container
      isActive={isActive}
      style={{
        height: heightProgress.interpolate({
          inputRange: [0, 100],
          outputRange: [110, 190],
          extrapolate: 'clamp',
        }),
      }}
    >
      <ChangeLanguage visible={modalVisible} setVisible={setModalVisible} />
      <Gradient>
        <Content>
          <ButtonLeft onPress={() => functionLeft()}>
            {renderButtonLeft()}
          </ButtonLeft>
          <Title>{title}</Title>
          <UnisexIcon />
        </Content>

        <Content
          style={{
            marginHorizontal: 40,
            borderTopColor: '#EFEFEF',
            borderTopWidth: 0.25,
            height: heightProgress.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 80],
              extrapolate: 'clamp',
            }),
            opacity: heightProgress.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}
        >
          <Action onPress={() => navigate('ResultsSearch')}>
            <FAIcon color="#EFEFEF" size={18} name="search" />
            <LabelAction>Buscar</LabelAction>
          </Action>

          <Action onPress={() => setModalVisible(true)}>
            <FAIcon color="#EFEFEF" size={18} name="language" />
            <LabelAction>Idioma</LabelAction>
          </Action>

          <Action onPress={() => navigate('About')}>
            <FAIcon color="#EFEFEF" size={18} name="info" />
            <LabelAction>Sobre o APP</LabelAction>
          </Action>
        </Content>
      </Gradient>
    </Container>
  );
}

Header.defaultProps = {
  title: 'Conhecendo as IST`s',
  goBack: false,
};

export default withNavigation(Header);
