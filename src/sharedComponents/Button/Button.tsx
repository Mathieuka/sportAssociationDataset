import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface IButton {
  title?: string;
  onPress?: (e: React.SyntheticEvent) => void;
  stylesProps?: any;
}

const Button: FC<IButton> = ({
  stylesProps = {},
  title = 'no props.title passed',
  onPress = (e) => e,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...stylesProps }}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
