import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.black,
    fontSize: 18,
    color: colors.white,
    paddingHorizontal: metrics.basePadding / 2,
    paddingVertical: metrics.basePadding / 2,
  },
});
