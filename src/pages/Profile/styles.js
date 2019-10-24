import { colors, metrics } from '~/styles';

export default {
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

  marginTop: {
    marginTop: metrics.baseMargin * 1.5,
  },

  spinner: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    size: 48,
    color: colors.white,
  },
};
