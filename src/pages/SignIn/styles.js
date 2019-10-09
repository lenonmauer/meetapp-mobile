import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding,
  },

  form: {
    height: '50%',
    justifyContent: 'space-between',
  },

  logo: {
    size: 42,
  },

  linkSignup: {
    fontSize: 18,
    color: colors.regular,
  },
});
