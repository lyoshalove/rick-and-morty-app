import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';
import { ArrowGray } from '../UI/ArrowGray';
import { useNavigation } from '@react-navigation/native';

const StyledWrapper = styled.ScrollView`
  background-color: ${theme.colors.basic.white};
  padding: 20px 0;
`;

const StyledTitle = styled.Text`
  padding: 0 15px;
  font-weight: 700;
  font-size: 20px;
  color: ${theme.colors.gray.gray1};
  margin: 0 0 10px;
`;

const StyledList = styled.FlatList`
  padding: 0 15px;
  border-color: ${theme.colors.basic.lineGray};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
`;

const StyledListItem = styled.TouchableOpacity`
  padding: 10px 0;
  border-color: ${theme.colors.basic.lineGray};
  border-bottom-width: 1px;
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledEpisode = styled.Text`
  letter-spacing: -0.41px;
  font-weight: 900;
  font-size: 17px;
  color: ${theme.colors.basic.black};
`;

const StyledName = styled.Text`
  letter-spacing: -0.24px;
  font-size: 15px;
  color: ${theme.colors.basic.lightGray};
`;

const StyledDate = styled.Text`
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.07px;
  color: ${theme.colors.gray.gray1};
`;

interface IEpisode {
  episode: string;
  name: string;
  created: string;
}

interface IDataEpisode {
  title: string;
  info: IEpisode[];
}

export const EpisodesSeasonList: React.FC<IDataEpisode> = ({ title, info }) => {
  const navigation = useNavigation();

  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledList
        data={info}
        renderItem={({ item }) => {
          return (
            <StyledListItem
              onPress={() =>
                navigation.navigate('EpisodeDetail', {
                  id: item.id,
                })
              }>
              <View>
                <StyledEpisode>{item.episode}</StyledEpisode>
                <StyledName>{item.name}</StyledName>
                <StyledDate>{item.created}</StyledDate>
              </View>
              <ArrowGray />
            </StyledListItem>
          );
        }}
      />
    </StyledWrapper>
  );
};
