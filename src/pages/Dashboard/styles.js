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
};
