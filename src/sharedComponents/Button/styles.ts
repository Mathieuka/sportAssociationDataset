import { StyleSheet } from 'react-native';
import colors from '../../sdk/colors';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    height: 40,
  },
  buttonText: {
    color: colors.SECONDARY,
  },
});

export default styles;
