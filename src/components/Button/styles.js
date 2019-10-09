import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 48,
    width: '100%',
    borderRadius: 30,
  },

  label: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
