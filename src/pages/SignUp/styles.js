import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: colors.background,
  },

  form: {
    height: 400,
  },

  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },

  input: {
    marginBottom: metrics.baseMargin,
  },

  linkSign: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: colors.regular,
    fontWeight: 'bold',
  },
});
