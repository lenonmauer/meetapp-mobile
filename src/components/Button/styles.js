import { colors, metrics } from '~/styles';

export default {
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
    container: {
      backgroundColor: colors.primaryDark,
      height: 42,
    },

    label: {
      fontSize: 16,
    },
  },

  disabled: {
    container: {
      opacity: 0.9,
    },
  },

  spinner: {
    color: colors.white,
    size: 28,
  },
};
