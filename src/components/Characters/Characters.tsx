import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { GET_ALL_CHARACTERS } from '../../query/characters';
import { ICharacterMainScreen } from '../../types/character';
import { CharacterCard } from '../CharacterCard';
import { ICharacterData } from '../../types/character';
import { Loader } from '../UI/Loader';
import { Header } from '../Header';

export const Characters: React.FC = () => {
  const { data, loading, error } = useQuery<ICharacterData>(GET_ALL_CHARACTERS);
  const [characters, setCharacters] = useState<ICharacterMainScreen[]>([]);

  useEffect(() => {
    setCharacters(data?.characters.results);
  }, [data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <View>
      <Header title="Character" />
      <FlatList
        numColumns="2"
        contentContainerStyle={{
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingBottom: 40,
          paddingLeft: 7,
          paddingRight: 7,
        }}
        data={characters}
        renderItem={({ item }) => {
          return <CharacterCard key={item.id} {...item} />;
        }}
      />
    </View>
  );
};
