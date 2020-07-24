import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie';

interface IGenderDisparityProps {
  genderData: any;
}

const GenderDisparity: FC<IGenderDisparityProps> = ({ genderData }) => {
  // const [womenPercentage, setWomenPercentage] = useState(0);
  // const [menPercentage, setMenPercentage] = useState(0);
  // const [total, setTotal] = useState(0);

  console.log(genderData);

  return (
    <View style={styles.container}>
      <Pie
        radius={80}
        sections={[
          {
            percentage: 10,
            color: '#C70039',
          },
          {
            percentage: 20,
            color: '#44CD40',
          },
        ]}
        strokeCap={'butt'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});

export default GenderDisparity;
