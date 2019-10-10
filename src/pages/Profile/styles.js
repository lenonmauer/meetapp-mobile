import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  form: {
    flex: 1,
    padding: metrics.basePadding * 2,
  },

  marginBottom: {
    marginBottom: metrics.baseMargin * 1.5,
  },
});
