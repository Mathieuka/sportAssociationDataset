import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';

interface ISectorOfActivityAreaProps {
  sectorOfActivityData: any;
}

const SectorOfActivity: FC<ISectorOfActivityAreaProps> = ({
  sectorOfActivityData,
}) => {
  if (sectorOfActivityData) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Disparity between the number of ecological sports</Text>
          <Text>and the others </Text>
        </View>
        <Pie
          radius={100}
          sections={[
            {
              percentage: sectorOfActivityData.percentageEcologicAssociation,
              color: '#44CD40',
            },
            {
              percentage: sectorOfActivityData.percentageOtherAssociation,
              color: '#C70039',
            },
          ]}
          dividerSize={2}
          strokeCap={'butt'}
        />
        <Text style={styles.ecologic}>
          Ecologic sport association{' '}
          {sectorOfActivityData.percentageEcologicAssociation} %
        </Text>
        <Text style={styles.other}>
          Other sport association{' '}
          {sectorOfActivityData.percentageOtherAssociation} %
        </Text>
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
  ecologic: {
    color: '#44CD40',
  },
  other: {
    color: '#C70039',
  },
  title: {
    margin: 20,
  },
});

export default SectorOfActivity;
