import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
  },

  label: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },

  themeDark: {
    backgroundColor: colors.primary,
    height: 42,
  },
});
