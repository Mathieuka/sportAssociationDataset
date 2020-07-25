import React, { FC, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Button from '../../sharedComponents/Button/Button';
import { HomeNavigationProp, ScreenName } from '../../router/type';
interface IHomeProps {
  navigation?: HomeNavigationProp;
  getData: any;
}

const img = {
  uri: 'https://mfiles.alphacoders.com/452/452736.jpg',
};

enum ButtonTitle {
  genderDisparity = 'Gender disparity',
  geographicalDisparity = 'Geographic Area disparity',
  sectorDisparity = 'Sector of activity',
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
    <ImageBackground source={img} style={styles.image}>
      <View style={styles.homeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Minimal application about sports associations in Paris
          </Text>
        </View>
        <Button
          stylesProps={styles.button}
          title={ButtonTitle.genderDisparity}
          onPress={() => handleNavigation(ScreenName.GenderDisparity)}
        />
        <Button
          stylesProps={styles.button}
          title={ButtonTitle.geographicalDisparity}
          onPress={() => handleNavigation(ScreenName.GeographicArea)}
        />
        <Button
          stylesProps={styles.button}
          title={ButtonTitle.sectorDisparity}
          onPress={() => handleNavigation(ScreenName.SectorOfActivity)}
        />
      </View>
    </ImageBackground>
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
  titleContainer: {
    padding: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Home;
