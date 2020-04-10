import styled from 'styled-components/native';

import { colors, NunitoBold, Nunito } from '~/styles';

export const Container = styled.View`
  height: 180px;
  background: #fff;
  margin: 20px 30px 10px;
  border-radius: 4px;

  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const Header = styled.View`
  height: 40px;
  background: #7598d4;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled(NunitoBold)`
  text-transform: none;
  font-size: 16px;
  color: #fff;
`;

export const Content = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 20px;
`;

export const Title = styled(NunitoBold)`
  font-size: 20px;
  color: ${colors.title};
`;

export const SubTitle = styled(Nunito)`
  margin-top: 5px;
  font-size: 16px;
  line-height: 20px;
  height: 60px;
`;
