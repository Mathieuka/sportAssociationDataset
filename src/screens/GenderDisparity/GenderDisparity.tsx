import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface IGenderDisparityProps {
  genderData: any;
}

const GenderDisparity: FC<IGenderDisparityProps> = ({ genderData }) => {
  console.log('gender => ', genderData);
  return (
    <View>
      <Text> GenderDisparity View </Text>
    </View>
  );
};

export default GenderDisparity;
