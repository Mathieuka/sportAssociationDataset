import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Pie from 'react-native-pie';
import { styles } from './styles';

interface ISectorOfActivityAreaProps {
  sectorOfActivityData: {
    percentageEcologicAssociation: number;
    percentageOtherAssociation: number;
  };
}

const SectorOfActivity: FC<ISectorOfActivityAreaProps> = ({
  sectorOfActivityData,
}) => {
  return sectorOfActivityData ? (
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
  ) : (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default SectorOfActivity;
