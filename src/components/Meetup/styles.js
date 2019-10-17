import { colors, metrics } from '~/styles';

export default {
  container: {
    marginTop: metrics.baseMargin * 2.5,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
    fontSize: 20,
  },

  image: {
    width: '100%',
    height: 200,
  },

  content: {
    container: {
      padding: metrics.basePadding * 1.7,
    },

    wrapper: {
      flexDirection: 'row',
      marginBottom: metrics.baseMargin * 1.5,
      alignItems: 'center',
    },

    icon: {
      color: colors.regular,
      size: 18,
      style: {
        marginRight: 5,
      },
    },

    description: {
      color: colors.regular,
      fontSize: 16,
    },
  },
};
