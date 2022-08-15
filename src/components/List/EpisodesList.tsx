import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GET_ALL_LOCATIONS_ONE_CHARACTER } from '../../query/locationsOneCharacter';
import { useQuery } from '@apollo/client';
import { ArrowGray } from '../UI/ArrowGray';
import styled from 'styled-components/native';
import { theme } from '../../theme/theme';

interface IProps {
  id: string;
  title: string;
}

interface ILocations {
  name: string;
  created: string;
  episode: string;
}

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

export const EpisodesList: React.FC<IProps> = ({ id, title }) => {
  const { data, loading, error } = useQuery(GET_ALL_LOCATIONS_ONE_CHARACTER, {
    variables: {
      id,
    },
  });
  const [locations, setLocations] = useState<ILocations[]>([]);

  useEffect(() => {
    setLocations(data?.character.episode);
  }, [data]);

  return (
    <View>
      <StyledTitle>{title}</StyledTitle>
      <StyledList
        data={locations}
        renderItem={({ item }) => {
          return (
            <StyledListItem>
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
    </View>
  );
};
