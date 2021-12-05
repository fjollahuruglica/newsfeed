import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../theme';

export default StyleSheet.create({
  headerStyle: { marginTop: 50 },
  headerTextStyle: { ...Fonts.bold, ...Fonts.h2 },
  subHeaderStyle: { ...Fonts.medium, color: Colors.$fontColor },
});
