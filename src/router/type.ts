import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './Router';

export enum ScreenName {
  Home = 'Home',
  GenderDisparity = 'GenderDisparity',
  SectorOfActivity = 'SectorOfActivity',
  GeographicArea = 'GeographicArea',
}

export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type GeographicAreaRouteProp = RouteProp<
  RootStackParamList,
  'GeographicArea'
>;
export type GeographicAreaNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GeographicArea'
>;

export type GenderDisparityRouteProp = RouteProp<
  RootStackParamList,
  'GenderDisparity'
>;
export type GenderDisparityNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GenderDisparity'
>;

export type SectorOfActivityRouteProp = RouteProp<
  RootStackParamList,
  'SectorOfActivity'
>;
export type SectorOfActivityNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SectorOfActivity'
>;
