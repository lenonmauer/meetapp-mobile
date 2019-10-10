import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: colors.darker,
    marginVertical: metrics.baseMargin * 2,
  },
});
