import styled from 'styled-components/native';

import background1 from '~/assets/backgrounds/background1.png';
import { colors } from '~/styles';

export const BackgroundImage = styled.Image.attrs({
  source: background1,
})`
  position: absolute;
  z-index: 0;
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
