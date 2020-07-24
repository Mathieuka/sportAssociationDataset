import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../sharedComponents/Button/Button';
const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Text> Home View </Text>
      <Button stylesProps={styles.button} title="Gender disparity" />
      <Button stylesProps={styles.button} title="Geographic Area disparity" />
      <Button stylesProps={styles.button} title="Sector of activity" />
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
