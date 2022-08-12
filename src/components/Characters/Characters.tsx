import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {GET_ALL_CHARACTERS} from '../../query/characters';
import {ICharacterMainScreen} from '../../types/character';
import {CharacterCard} from '../CharacterCard';
import {ICharacterData} from '../../types/character';

export const Characters: React.FC = () => {
  const {data, loading, error} = useQuery<ICharacterData>(GET_ALL_CHARACTERS);
  const [characters, setCharacters] = useState<ICharacterMainScreen[]>([]);

  useEffect(() => {
    setCharacters(data?.characters.results);
  }, [data]);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      numColumns="2"
      contentContainerStyle={{
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 40,
        alignItems: 'center',
      }}
      data={characters}
      renderItem={({item}) => {
        return <CharacterCard key={item.id} {...item} />;
      }}
    />
  );
};
