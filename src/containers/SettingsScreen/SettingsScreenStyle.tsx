import { StyleSheet } from 'react-native';
import { Helpers } from '../../theme';

export default StyleSheet.create({
  separator: {
    ...Helpers.directionRow,
    ...Helpers.alignCenter,
    marginTop: 50,
    ...Helpers.spaceAround,
  },
});
