import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface IGeographicalAreaProps {
  geographicalData: any;
}

const GeographicalArea: FC<IGeographicalAreaProps> = ({ geographicalData }) => {
  console.log('geographicalData => ', geographicalData);
  return (
    <View>
      <Text> GeographicalArea View </Text>
    </View>
  );
};

export default GeographicalArea;
