import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharactersScreen} from '../Screens/CharactersScreen';
import {LocationScreen} from '../Screens/LocationScreen';
import {EpisodeScreen} from '../Screens/EpisodeScreen';
import {CharacterScreen} from '../Screens/CharacterScreen';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="Character" component={CharactersScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterScreen} />
    </Stack.Navigator>
  );
};
