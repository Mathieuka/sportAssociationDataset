import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface ISectorOfActivityAreaProps {
  sectorOfActivityData: any;
}

const SectorOfActivity: FC<ISectorOfActivityAreaProps> = ({
  sectorOfActivityData,
}) => {
  console.log('sectorOfActivityData => ', sectorOfActivityData);
  return (
    <View>
      <Text> SectorOfActivity View </Text>
    </View>
  );
};

export default SectorOfActivity;
