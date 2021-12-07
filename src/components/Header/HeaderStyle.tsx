import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../theme';

export default StyleSheet.create({
  headerTextStyle: { ...Fonts.bold, ...Fonts.h3 },
  subHeaderStyle: { ...Fonts.normal, color: Colors.$fontColor, paddingTop: 10 },
});
