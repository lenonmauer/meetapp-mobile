import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  spinner: {
    color: colors.regular,
  },
});
