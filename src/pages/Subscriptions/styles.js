import { colors, metrics } from '~/styles';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: metrics.basePadding * 2,
    paddingTop: metrics.basePadding * 2,
  },

  spinner: {
    container: {
      marginTop: metrics.baseMargin,
    },

    color: colors.white,
    size: 48,
  },

  emptyList: {
    container: {
      flex: 1,
      marginTop: metrics.baseMargin * 2,
    },

    text: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 18,
    },
  },
};
