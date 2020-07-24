import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';

interface IGeographicalAreaProps {
  geographicalData: any;
}

const GeographicalArea: FC<IGeographicalAreaProps> = ({ geographicalData }) => {
  console.log('geographicalData => ', geographicalData);

  if (geographicalData) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Number of sports </Text>
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
    );
  } else {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  paris: {
    color: '#404FCD',
  },
  otherCity: {
    color: '#f5aa42',
  },
  title: {
    margin: 20,
  },
});

export default GeographicalArea;
