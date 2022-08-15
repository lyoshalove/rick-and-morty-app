import React from 'react';
import { Image, View, Text, ImageBackground } from 'react-native';
import characterCardBg from '../../assets/images/character-bg.jpg';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

interface IProps {
  name: string;
  image: string;
  status: string;
  species: string;
}

const StyledWrapper = styled.View`
  margin: 3px 0 0;
  padding: 0 0 20px;
  background-color: ${theme.colors.gray.gray6};
`;

const StyledBackground = styled.ImageBackground.attrs({
  blurRadius: 1,
})`
  width: 100%;
  height: 84px;
  backdrop-filter: blur(4px);
`;

const StyledAvatar = styled.Image`
  margin: -62px auto 0;
  width: 140px;
  height: 140px;
  border-radius: 130px;
  border: 5px solid ${theme.colors.gray.gray6};
  overflow: hidden;
`;

const StyledCharacterInfo = styled.View`
  margin: 20px 0 0;
  display: flex;
  align-items: center;
`;

const StyledStatus = styled.Text`
  letter-spacing: 0.07px;
  font-size: 11px;
  color: ${theme.colors.basic.lightGray};
`;

const StyledName = styled.Text`
  font-weight: 700;
  fonxt-size: 28px;
  letter-spacing: 0.337647px;
  color: ${theme.colors.basic.black};
`;

const StyledGender = styled.Text`
  font-size: 13px;
  font-weight: 900;
  letter-spacing: -0.08px;
  color: ${theme.colors.gray.gray1};
  text-transform: uppercase;
`;

export const CharacterDetailCard: React.FC<IProps> = ({
  name,
  image,
  status,
  species,
}) => {
  return (
    <StyledWrapper>
      <StyledBackground source={characterCardBg} />
      <StyledAvatar source={{ uri: image }} />
      <StyledCharacterInfo>
        <StyledStatus>{status}</StyledStatus>
        <StyledName>{name}</StyledName>
        <StyledGender>{species}</StyledGender>
      </StyledCharacterInfo>
    </StyledWrapper>
  );
};
