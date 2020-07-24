import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';

interface IGenderDisparityProps {
  genderData: any;
}

const GenderDisparity: FC<IGenderDisparityProps> = ({ genderData }) => {
  useEffect(() => {}, [genderData]);
  if (genderData) {
    return (
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
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  women: {
    color: '#C70039',
  },
  men: {
    color: '#44CD40',
  },
  title: {
    margin: 20,
  },
});

export default GenderDisparity;
