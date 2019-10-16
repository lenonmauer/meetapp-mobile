import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  dateSwitch: {
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    },

    label: {
      color: colors.white,
      fontSize: 20,
      marginHorizontal: 20,
      fontWeight: 'bold',
      lineHeight: 24,
    },

    icon: {
      size: 40,
      color: colors.white,
    },
  },

  meetup: {
    container: {
      marginTop: 25,
      backgroundColor: '#fff',
      borderRadius: metrics.baseRadius,
    },

    title: {
      fontWeight: 'bold',
      marginBottom: 10,
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
        marginBottom: 10,
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
  },
};
