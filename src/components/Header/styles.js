import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

import styled, { css } from 'styled-components/native';

import unisex from '~/assets/icons/unisex.png';
import { colors, NunitoBold, Nunito } from '~/styles';

export const Container = styled(Animated.View)`
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  z-index: 5;
  elevation: 5;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
    `}
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [colors.primary, '#9BA2DA', colors.secundary],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  padding-top: ${getStatusBarHeight() + 10}px;
`;

export const Content = styled(Animated.View)`
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: row;
  height: 70px;
`;

export const Title = styled(NunitoBold)`
  color: #fff;
  text-align: center;
  font-size: 16px;
`;

export const ButtonLeft = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin: 0 10px 0 20px;
`;

export const UnisexIcon = styled.Image.attrs({
  source: unisex,
  resizeMode: 'contain',
})`
  height: 40px;
  width: 40px;
  margin: 0 15px 0 10px;
`;

export const Action = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
`;

export const LabelAction = styled(Nunito)`
  color: #fff;
  margin-top: 4px;
  font-size: 12px;
`;
