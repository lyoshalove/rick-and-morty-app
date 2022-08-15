import React from 'react';
import {View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { getSlicedText } from '../../utils/getSlicesText';

interface IProps {
  title: string;
}

const StyledWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 8.5px;
  height: 44px;
  position: relative;
  background-color: ${theme.colors.basic.white};
`;

const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: auto;
`;

const StyledButtonText = styled.Text`
  color: ${theme.colors.accent};
  font-size: 17px;
  letter-spacing: -0.41px;
  margin-left: 5.5px;
`;

const StyledTitle = styled.Text`
  font-weight: 900;
  font-size: 15px;
  letter-spacing: -0.24px;
  text-align: center;
  color: ${theme.colors.basic.black};
  position: absolute;
`;

export const SecondaryHeader: React.FC<IProps> = ({ title }) => {
  const navigate = useNavigation();

  return (
    <StyledWrapper>
      <StyledButton onPress={() => navigate.goBack()}>
        <Svg
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0371 20.5827L0.792152 11.4458C0.402616 11.0612 0.402616 10.4398 0.792152 10.0542L10.0371 0.917333C10.5995 0.360889 11.5144 0.360889 12.0777 0.917333C12.64 1.47378 12.64 2.37687 12.0777 2.93332L4.16913 10.7505L12.0777 18.5657C12.64 19.1231 12.64 20.0262 12.0777 20.5827C11.5144 21.1391 10.5995 21.1391 10.0371 20.5827Z"
            fill="#5856D6"
          />
        </Svg>
        <StyledButtonText>Back</StyledButtonText>
      </StyledButton>
      <StyledTitle>{getSlicedText(title, 17)}</StyledTitle>
    </StyledWrapper>
  );
};
