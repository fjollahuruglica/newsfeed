import { StyleSheet } from 'react-native';
import { Helpers, Fonts } from '../../theme';

export default StyleSheet.create({
  searchBtn: {
    ...Helpers.directionRow,
    ...Helpers.alignCenter,
    marginBottom: 25,
    paddingHorizontal: 20,
    height: 60,
    ...Helpers.radius,
    marginTop: 50,
  },
  searchTxt: {
    ...Fonts.normal,
    ...Fonts.fontFamilyLight,
    paddingLeft: 10,
    fontWeight: '500',
    width: '100%',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
});
