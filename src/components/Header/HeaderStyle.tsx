import { StyleSheet } from 'react-native';
import { Fonts } from '../../theme';

export default StyleSheet.create({
  headerTextStyle: { ...Fonts.bold, ...Fonts.h3 },
  subHeaderStyle: { ...Fonts.normal, paddingTop: 10 },
});
