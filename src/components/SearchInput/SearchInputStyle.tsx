import { StyleSheet } from 'react-native';
import { Colors, Helpers, Fonts } from '../../theme';

export default StyleSheet.create({
  searchBtn: {
    ...Helpers.directionRow,
    backgroundColor: Colors.$inputColor,
    marginBottom: 25,
    paddingHorizontal: 20,
    paddingVertical: 16,
    ...Helpers.radius,
    marginTop: 50,
  },
  searchTxt: {
    color: Colors.$fontColor,
    ...Fonts.normal,
    ...Fonts.fontFamilyLight,
    paddingLeft: 10,
    fontWeight: '500',
  },
  searchIcon: {
    width: 25,
    height: 25,
    tintColor: Colors.$fontColor,
  },
});
