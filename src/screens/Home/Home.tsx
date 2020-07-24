import React, { FC, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../sharedComponents/Button/Button';
import { HomeNavigationProp, ScreenName } from '../../router/type';
interface IHomeProps {
  navigation?: HomeNavigationProp;
  getData: any;
}

const Home: FC<IHomeProps> = ({ navigation, getData }) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = (screenName: ScreenName) => {
    if (navigation) {
      navigation.navigate(screenName);
    }
  };

  return (
    <View style={styles.homeContainer}>
      <Text> Home View </Text>
      <Button
        stylesProps={styles.button}
        title="Gender disparity"
        onPress={() => handleNavigation(ScreenName.GenderDisparity)}
      />
      <Button
        stylesProps={styles.button}
        title="Geographic Area disparity"
        onPress={() => handleNavigation(ScreenName.GeographicArea)}
      />
      <Button
        stylesProps={styles.button}
        title="Sector of activity"
        onPress={() => handleNavigation(ScreenName.SectorOfActivity)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 200,
  },
});

export default Home;
