import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

import colors from './colors';

export const NunitoSemiBold = styled.Text`
  color: ${colors.title};
  ${Platform.OS === 'ios'
    ? css`
        font-family: 'Nunito';
        font-weight: 600;
      `
    : css`
        font-family: 'Nunito SemiBold';
      `}
`;

export const NunitoBold = styled.Text`
  color: ${colors.title};
  ${Platform.OS === 'ios'
    ? css`
        font-family: 'Nunito';
        font-weight: bold;
      `
    : css`
        font-family: 'Nunito Bold';
      `}
`;

export const NunitoItalic = styled.Text`
  color: ${colors.title};
  ${Platform.OS === 'ios'
    ? css`
        font-family: 'Nunito';
        font-style: italic;
      `
    : css`
        font-family: 'Nunito Italic';
      `}
`;

export const Nunito = styled.Text`
  color: ${colors.title};
  font-family: 'Nunito';
`;

export const NunitoBlack = styled.Text`
  color: ${colors.title};
  ${Platform.OS === 'ios'
    ? css`
        font-family: 'Nunito';
        font-weight: 900;
      `
    : css`
        font-family: 'Nunito Black';
      `}
`;
