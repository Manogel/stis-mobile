import React, { memo } from 'react';

import { colors } from '~/styles';

import { Container, Spinner } from './styles';

function Loading() {
  return (
    <Container>
      <Spinner color={colors.primary} size="small" />
    </Container>
  );
}

export default memo(Loading);
