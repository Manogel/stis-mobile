import styled from 'styled-components/native';

import { NunitoBold, Nunito } from '~/styles';

export const Background = styled.View`
  background: rgba(0, 0, 0, 0.3);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  background: #fff;
  align-self: stretch;
  padding: 20px;
  border-radius: 5px;
  margin: 0 40px;
`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ButtonClose = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const Title = styled(NunitoBold)`
  font-size: 20px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 54px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #ebebeb;
`;

export const ItemImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 30px;
  width: 30px;
`;

export const Name = styled(Nunito)`
  font-size: 16px;
  margin-left: 10px;
  color: #333;
`;
