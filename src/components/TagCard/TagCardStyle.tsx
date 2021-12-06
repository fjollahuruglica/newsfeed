import { StyleSheet } from 'react-native';
import { Colors, Helpers } from '../../theme';

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
    color: Colors.$white,
    textAlign: 'center',
  },
  timeIcon: {
    width: 13,
    height: 13,
    tintColor: Colors.$fontColor,
    alignSelf: 'center',
    marginRight: 5,
  },
});
