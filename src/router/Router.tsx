import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/HomeConnected';
import GeographicArea from '../screens/GeographicArea/GeographicalAreaConnected';
import GenderDisparity from '../screens/GenderDisparity/GenderDisparityConnected';
import SectorOfActivity from '../screens/SectorOfActivity/SectorOfActivityConnected';

export type RootStackParamList = {
  Home: undefined;
  GeographicArea: undefined;
  GenderDisparity: undefined;
  SectorOfActivity: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GeographicArea" component={GeographicArea} />
        <Stack.Screen name="GenderDisparity" component={GenderDisparity} />
        <Stack.Screen name="SectorOfActivity" component={SectorOfActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
