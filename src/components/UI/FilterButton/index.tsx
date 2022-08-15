import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../../../theme/theme';

const StyledFilterButton = styled.Text`
  color: ${theme.colors.accent};
  font-weight: 900;
  font-size: 17px;
  margin-left: auto;
`;

export const FilterButton: React.FC = () => {
  return <StyledFilterButton>Filter</StyledFilterButton>;
};
