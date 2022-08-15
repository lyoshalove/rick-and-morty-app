import React from 'react';
import { useQuery } from '@apollo/client';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { GET_ALL_LOCATIONS } from '../../query/locations';
import { ILocationsData } from '../../types/locations';
import { LocationCard } from '../LocationCard';
import { Header } from '../Header';
import { Loader } from '../UI/Loader';

export const Locations: React.FC = () => {
  const { data, loading, error } = useQuery<ILocationsData>(GET_ALL_LOCATIONS);

  if (loading) {
    return <Loader />;
  }

  return (
    <View>
      <Header title="Location" />
      <FlatList
        contentContainerStyle={{
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingBottom: 40,
          paddingLeft: 7,
          paddingRight: 7,
          alignItems: 'center',
        }}
        numColumns="2"
        data={data?.locations.results}
        renderItem={({ item }) => {
          return <LocationCard id={item.id} name={item.name} type={item.type} />;
        }}
      />
    </View>
  );
};
