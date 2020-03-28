import { Platform } from 'react-native';

import styled from 'styled-components';

import colors from './colors';
import {
  Nunito,
  NunitoBlack,
  NunitoBold,
  NunitoItalic,
  NunitoSemiBold,
} from './fonts';
import metrics from './metrics';

const Background = styled.View`
  background: ${colors.background};
  flex: 1;
`;

const PlatformType = Platform.OS;

export {
  Background,
  colors,
  metrics,
  Nunito,
  NunitoBlack,
  NunitoBold,
  NunitoItalic,
  NunitoSemiBold,
  PlatformType,
};
