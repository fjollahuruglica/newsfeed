import { StyleSheet } from 'react-native';
import { Colors, Helpers, Fonts } from '../../theme';

export default StyleSheet.create({
  cardContainer: {
    ...Helpers.directionRow,
    height: 75,
    width: '100%',
  },
  cardImage: {
    width: 75,
    height: '100%',
    borderRadius: 10,
  },
  cardInfo: {
    ...Helpers.spaceBetween,
    flexGrow: 1,
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 5,
  },
  headingInfo: {
    color: Colors.$primary,
    ...Fonts.normal,
    ...Fonts.bold,
  },
  timeInfo: {
    ...Helpers.directionRow,
    ...Helpers.alignCenter,
  },
  timeIcon: {
    width: 13,
    height: 13,
    tintColor: Colors.$fontColor,
  },
  timeText: {
    paddingLeft: 5,
    color: Colors.$fontColor,
  },
});
