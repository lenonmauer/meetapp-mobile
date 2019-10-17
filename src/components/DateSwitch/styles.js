import { colors, metrics } from '~/styles';

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },

  label: {
    color: colors.white,
    fontSize: 20,
    marginHorizontal: metrics.baseMargin * 2,
    fontWeight: 'bold',
    lineHeight: 24,
  },

  icon: {
    size: 40,
    color: colors.white,
  },
};
