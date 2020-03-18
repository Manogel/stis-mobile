import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import unisex from '~/assets/icons/unisex.png';
import { colors, NunitoBold, NunitoSemiBold } from '~/styles';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.primary, '#9BA2DA', colors.secundary],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex-direction: row;
  padding-top: ${getStatusBarHeight()}px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
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
