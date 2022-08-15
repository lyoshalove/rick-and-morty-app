import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { CharacterScreen } from '../../Screens/CharacterScreen';
import { LocationScreen } from '../../Screens/LocationsScreen';
import { EpisodeScreen } from '../../Screens/EpisodesScreen';

export const TabBar: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(248, 248, 248, 0.92)',
          height: 50,
        },
        tabBarActiveTintColor: '#5856D6',
        headerStyle: {
          backgroundColor: 'rgba(248, 248, 248, 0.92)',
          height: 80,
        },
        headerTitleStyle: {
          color: '081F32',
          fontWeight: '700',
          fontSize: 34,
        },
      }}>
      <Tab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/images/character-bg.jpg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/images/character-bg.jpg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Episode"
        component={EpisodeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/images/character-bg.jpg')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
