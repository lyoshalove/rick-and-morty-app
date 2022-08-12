import {useQuery} from '@apollo/client';
import React from 'react';
import {View, Text} from 'react-native';
import {CharacterDetailCard} from '../../components/CharacterDetailCard';
import {InformationList} from '../../components/List/InfomationList';
import {GET_ONE_CHARACTER} from '../../query/character';

export const CharacterScreen: React.FC = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useQuery(GET_ONE_CHARACTER, {
    variables: {
      id,
    },
  });

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <CharacterDetailCard {...data.character} />
      <InformationList />
    </View>
  );
};
