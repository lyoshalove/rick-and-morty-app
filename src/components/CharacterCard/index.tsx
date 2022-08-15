import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { ICharacterMainScreen } from '../../types/character';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

export const CharacterCard: React.FC<ICharacterMainScreen> = ({
  id,
  image,
  name,
  status,
}) => {
  const navigation = useNavigation();
  const StyledWrapper = styled.TouchableOpacity`
    border: 1px solid ${theme.colors.basic.cardBorder};
    border-radius: 8px;
    margin: 0 8px 20px;
    width: 46%;
  `;

  const StyledImage = styled.Image`
    width: 100%;
    height: 140px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `;

  const StyledStatus = styled.Text`
    font-size: 11px;
    letter-spacing: 0.07px;
    color: ${theme.colors.basic.lightGray};
  `;

  const StyledName = styled.Text`
    font-weight: 900;
    font-size: 17px;
    letter-spacing: -0.41px;
    color: ${theme.colors.basic.black};
  `;

  const StyledInfo = styled.View`
    padding: 12px;
  `;

  return (
    <StyledWrapper
      onPress={() =>
        navigation.navigate('CharacterDetail', {
          id,
        })
      }>
      <StyledImage source={{ uri: image }} alt={name} />
      <StyledInfo>
        <StyledStatus>{status}</StyledStatus>
        <StyledName>{name}</StyledName>
      </StyledInfo>
    </StyledWrapper>
  );
};
