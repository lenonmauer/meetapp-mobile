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
};
