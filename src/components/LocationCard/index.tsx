import React from 'react';
import { Text, View } from 'react-native';
import { ILocationsResults } from '../../types/locations';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

const StyledLocationCard = styled.TouchableOpacity`
  border: 1px solid ${theme.colors.basic.cardBorder};
  border-radius: 8px;
  margin: 0 8px 20px;
  width: 46%;
  min-height: 80px;
  padding: 12px;
`;

const StyledType = styled.Text`
  font-size: 11px;
  color: ${theme.colors.basic.lightGray};
`;

const StyledName = styled.Text`
  font-weight: 900;
  font-size: 17px;
  color: ${theme.colors.basic.black};
`;

export const LocationCard: React.FC<Omit<ILocationsResults, '__typename'>> = ({
  name,
  type,
  id,
}) => {
  const navigation = useNavigation();

  return (
    <StyledLocationCard
      onPress={() =>
        navigation.navigate('LocationDetail', {
          id,
        })
      }>
      <StyledType>{type}</StyledType>
      <StyledName>{name}</StyledName>
    </StyledLocationCard>
  );
};
