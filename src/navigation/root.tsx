import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharactersScreen } from '../Screens/CharactersScreen';
import { LocationsScreen } from '../Screens/LocationsScreen';
import { EpisodesScreen } from '../Screens/EpisodesScreen';
import { CharacterScreen } from '../Screens/CharacterScreen';
import { TabBar } from '../components/TabBar';
import { LocationScreen } from '../Screens/LocationScreen';
import { EpisodeScreen } from '../Screens/EpisodeScreen';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="TabBar" component={TabBar} /> */}
      {/* <Stack.Screen name="Character" component={CharactersScreen} /> */}
      {/* <Stack.Screen name="Location" component={LocationsScreen} /> */}
      <Stack.Screen name="Episode" component={EpisodesScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterScreen} />
      <Stack.Screen name="LocationDetail" component={LocationScreen} />
      <Stack.Screen name="EpisodeDetail" component={EpisodeScreen} />
    </Stack.Navigator>
  );
};
