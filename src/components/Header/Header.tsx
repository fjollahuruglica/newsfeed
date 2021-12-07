import React from 'react';
import { View } from 'react-native';
import styles from './HeaderStyle';
import DefaultText from '../DefaultText/DefaultText';
import { Helpers } from '../../theme';
import { useTheme } from '@react-navigation/native';
interface Props {
  title: string;
  subTitle: string;
  light?: boolean;
  small?: boolean;
  noNumberOfLines?: boolean;
}
const Header: React.FC<Props> = ({
  title,
  subTitle,
  light,
  small,
  noNumberOfLines,
}) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...Helpers.topMargin }}>
      <DefaultText
        text={title}
        bold
        style={{
          ...styles.headerTextStyle,
          color: light ? 'white' : colors.primary,
          fontSize: small ? 20 : 30,
        }}
      />
      <DefaultText
        text={subTitle}
        style={{ ...styles.subHeaderStyle, color: colors.text }}
        noNumberOfLines={noNumberOfLines}
      />
    </View>
  );
};

export default Header;
