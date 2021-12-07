import { StyleSheet } from 'react-native';
import { Fonts, Helpers } from '../../theme';

export default StyleSheet.create({
  languageContainer: {
    ...Helpers.directionRow,
    ...Helpers.alignCenter,
    marginTop: 20,
    padding: 15,
    borderRadius: 20,
  },
  languageIcon: {
    width: 40,
    height: 40,
  },
  languageText: {
    paddingLeft: 20,
    ...Fonts.large,
  },
});
