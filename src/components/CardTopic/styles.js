import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import { NunitoBold, NunitoSemiBold, colors, Nunito } from '~/styles';

export const BorderGradient = styled(LinearGradient).attrs({
  colors: [colors.female, colors.male],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
`;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding-right: 10px;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  margin-top: 20px;

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const Info = styled.View`
  padding: 10px 10px 10px 15px;
  flex: 1;
`;

export const Title = styled(NunitoBold)``;

export const Introduction = styled(Nunito)``;
