import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';

import styled from 'styled-components/native';

import { colors, NunitoBold, NunitoSemiBold, PlatformType } from '~/styles';

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

export const ContentForm = styled.KeyboardAvoidingView.attrs({
  enable: PlatformType === 'ios',
  behavior: PlatformType === 'ios' ? 'padding' : 'height',
})`
  margin: 0 30px;
`;

export const Input = styled.TextInput`
  height: 44px;
  color: #333;
  padding: 0 20px;
  background: #fff;
  border-radius: 2px;
  margin-top: 20px;

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const InputMask = styled(TextInputMask)`
  height: 44px;
  color: #333;
  padding: 0 20px;
  background: #fff;
  border-radius: 2px;
  margin-top: 20px;

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
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

export const BoxSelectSex = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  background: #fff;
  align-self: center;
  padding: 20px 30px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const SexOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  align-items: center;
`;

export const SexIcon = styled.Image`
  height: 50px;
  width: 50px;
`;

export const Divider = styled.View`
  height: 120%;
  background: #ccc;
  width: 1px;
  margin: 0 30px;
`;
