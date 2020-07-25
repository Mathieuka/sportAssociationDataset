import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Pie from 'react-native-pie';
import { styles } from './styles';

interface IGeographicalAreaProps {
  geographicalData: { percentageParis: number; percentageOtherCity: number };
}

const GeographicalArea: FC<IGeographicalAreaProps> = ({ geographicalData }) => {
  return geographicalData ? (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Number of associations in Paris </Text>
        <Text>VS other regions </Text>
      </View>
      <Pie
        radius={100}
        innerRadius={60}
        sections={[
          {
            percentage: geographicalData.percentageParis,
            color: '#404FCD',
          },
          {
            percentage: geographicalData.percentageOtherCity,
            color: '#f5aa42',
          },
        ]}
        dividerSize={2}
        strokeCap={'round'}
      />
      <Text style={styles.paris}>
        Paris {geographicalData.percentageParis} %
      </Text>
      <Text style={styles.otherCity}>
        Other city {geographicalData.percentageOtherCity} %
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default GeographicalArea;
