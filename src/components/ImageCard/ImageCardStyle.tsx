import { StyleSheet } from 'react-native';
import { Helpers } from '../../theme';

export default StyleSheet.create({
  cardContainer: {
    height: 400,
  },
  gradientStyle: {
    backgroundColor: 'transparent',
  },
  cardBody: {
    alignContent: 'space-between',
    justifyContent: 'space-between',
    height: '100%',
    ...Helpers.horizontalMargin,
    marginBottom: -20,
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});
