import React from 'react';
import styled from 'styled-components/native';

const StyledLoader = styled.ActivityIndicator`
  width: 100%;
  height: 100%;
`;

export const Loader: React.FC = () => {
  return <StyledLoader />;
};
