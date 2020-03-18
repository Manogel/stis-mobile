import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import { colors, NunitoBold, NunitoSemiBold } from '~/styles';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.primary, '#9BA2DA', colors.secundary],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 10}px;
  padding-bottom: ${getBottomSpace() + 10}px;
  justify-content: space-around;
  text-align: center;
`;

export const Title = styled(NunitoBold)`
  color: #fff;
  text-align: center;
  font-size: 24px;
`;

export const SubTitle = styled(NunitoSemiBold)`
  color: #fff;
  text-align: center;
  margin: 0 40px;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: auto;
  background: ${colors.primary};
  height: 44px;
  align-self: center;
  padding: 0 40px;

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const ButtonText = styled(NunitoSemiBold)`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
