import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Pie from 'react-native-pie';
import { styles } from './styles';

interface IGenderDisparityProps {
  genderData: { percentageOfWomen: number; percentageOfMen: number };
}

const GenderDisparity: FC<IGenderDisparityProps> = ({ genderData }) => {
  return genderData ? (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Disparity between men and women </Text>
        <Text>in sports associations in paris </Text>
      </View>
      <Pie
        radius={100}
        sections={[
          {
            percentage: genderData.percentageOfWomen,
            color: '#C70039',
          },
          {
            percentage: genderData.percentageOfMen,
            color: '#44CD40',
          },
        ]}
        strokeCap={'butt'}
      />
      <Text style={styles.women}>Women {genderData.percentageOfWomen} %</Text>
      <Text style={styles.men}>Men {genderData.percentageOfMen} %</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default GenderDisparity;
