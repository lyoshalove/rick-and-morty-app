import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { FilterButton } from '../UI/FilterButton';

interface IProps {
  title: string;
}

const StyledHeader = styled.View`
  padding: 10px 15px;
  background-color: #f8f8f8;
`;

const StyledTitle = styled.Text`
  font-weight: 700;
  font-size: 34px;
  letter-spacing: 0.41px;
  color: ${theme.colors.basic.black};
`;

export const Header: React.FC<IProps> = ({ title }) => {
  return (
    <StyledHeader>
      <FilterButton />
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
};
