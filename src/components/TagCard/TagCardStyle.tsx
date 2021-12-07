import { StyleSheet } from 'react-native';
import { Helpers } from '../../theme';

export default StyleSheet.create({
  cardContainer: {
    height: 40,
    width: 120,
    ...Helpers.justifyCenter,
    ...Helpers.alignCenter,
    ...Helpers.directionRow,
    borderRadius: 20,
    marginTop: 20,
  },
  cardText: {
    textAlign: 'center',
  },
  timeIcon: {
    width: 13,
    height: 13,
    alignSelf: 'center',
    marginRight: 5,
  },
});
