import React from 'react';
import { View, Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { ArrowGray } from '../UI/ArrowGray';

interface IProps {
  gender: string;
  origin: string;
  type: string;
  location: string;
}

const StyledWrapper = styled.View`
  padding: 0 0 40px;
`;

const StyledTitle = styled.Text`
  padding: 0 15px;
  font-weight: 700;
  font-size: 20px;
  color: ${theme.colors.gray.gray1};
  margin: 0 0 10px;
`;

const StyledList = styled.View`
  padding: 0 15px;
  border-color: ${theme.colors.basic.lineGray};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
`;

const StyledListItem = styled.View`
  padding: 10px 0;
  border-color: ${theme.colors.basic.lineGray};
  border-bottom-width: 1px;
  border-style: solid;
`;

const StyledListItemLast = styled.TouchableOpacity`
  padding: 10px 0;
  border: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledListTitle = styled.Text`
  font-weight: 900;
  font-size: 17px;
  letter-spacing: -0.41px;
  color: ${theme.colors.basic.black};
`;

const StyledListText = styled.Text`
  font-size: 15px;
  letter-spacing: -0.24px;
  color: ${theme.colors.basic.lightGray};
`;

export const InformationList: React.FC<IProps> = ({
  gender,
  origin,
  type,
  location,
}) => {
  return (
    <StyledWrapper>
      <StyledTitle>Information</StyledTitle>
      <StyledList>
        <StyledListItem>
          <StyledListTitle>Gender</StyledListTitle>
          <StyledListText>{gender}</StyledListText>
        </StyledListItem>
        <StyledListItem>
          <StyledListTitle>Origin</StyledListTitle>
          <StyledListText>{origin}</StyledListText>
        </StyledListItem>
        <StyledListItem>
          <StyledListTitle>Type</StyledListTitle>
          <StyledListText>{type === '' ? 'Unknown' : type}</StyledListText>
        </StyledListItem>
        <StyledListItemLast onPress={() => Alert.alert('BEBRA', 'bebrik')}>
          <View>
            <StyledListTitle>Location</StyledListTitle>
            <StyledListText>{location}</StyledListText>
          </View>
          <ArrowGray />
        </StyledListItemLast>
      </StyledList>
    </StyledWrapper>
  );
};
