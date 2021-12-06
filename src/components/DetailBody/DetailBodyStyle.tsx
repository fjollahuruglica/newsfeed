import { StyleSheet } from 'react-native';
import { Helpers } from '../../theme';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: '100%',
  },
  tagCardContainer: {
    ...Helpers.directionRow,
    ...Helpers.spaceBetween,
  },
});
