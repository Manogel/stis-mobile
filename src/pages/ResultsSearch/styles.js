import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import background1 from '~/assets/backgrounds/background4.png';
import { colors, NunitoBold, Nunito } from '~/styles';

export const BackgroundImage = styled.Image.attrs({
  source: background1,
})`
  position: absolute;
  z-index: 0;
  top: 10px;
  bottom: 0;
  left: 0;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const IdentCards = styled.View`
  background: transparent;
  margin-left: 10%;
`;

export const TitleSession = styled(NunitoBold)`
  font-size: 20px;
  margin: 25px;
`;

export const BorderGradient = styled(LinearGradient).attrs(({ sex }) => {
  let color = [colors.female, colors.male];

  if (sex === 0) {
    color = [colors.female, colors.female];
  }

  if (sex === 1) {
    color = [colors.male, colors.male];
  }

  return {
    colors: color,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  };
})`
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
`;
