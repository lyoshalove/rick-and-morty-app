import React from 'react';
import {View, Text} from 'react-native';

interface IProps {
  gender: string;
  origin: string;
  type: string;
  location: string;
}

export const InformationList: React.FC<IProps> = ({ gender, origin, type, location }) => {
  return (
    <View>
      <Text>Information</Text>
    </View>
  );
};
