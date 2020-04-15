import Html from 'react-native-render-html';

import styled, { css } from 'styled-components/native';

import background2 from '~/assets/backgrounds/background2.png';
import {
  colors,
  NunitoBold,
  PlatformType,
  metrics,
  NunitoSemiBold,
} from '~/styles';

export const BackgroundImage = styled.Image.attrs({
  source: background2,
})`
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginHorizontal: 30,
    paddingBottom: 20,
    flex: 1,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const MainHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 30px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 4px 0;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.title};

  ${({ active }) =>
    active &&
    css`
      border-bottom-width: 3px;
      border-bottom-color: ${colors.male};
    `}
`;

export const ButtonName = styled(NunitoBold)`
  font-size: 16px;
  text-align: center;

  color: ${colors.title};

  ${({ active }) =>
    active &&
    css`
      color: ${colors.male};
    `};
`;

export const HtmlView = styled(Html).attrs({
  imagesMaxWidth: metrics.screenWhidth - 60,
  tagsStyles: {
    p: {
      textAlign: 'justify',
      color: colors.subtitle,
      lineHeight: 18,
      fontSize: 14,
    },
    li: {
      fontSize: 16,
      color: colors.title,
    },
    ul: {
      color: colors.title,
    },
    strong: {
      color: colors.title,
    },
  },
})``;

export const ImageContent = styled.ImageBackground`
  height: 200px;

  margin-bottom: 10px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  align-self: stretch;
  align-content: center;

  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 10px;
`;

export const Description = styled(NunitoSemiBold)`
  font-size: 12px;
  color: #fff;
`;
