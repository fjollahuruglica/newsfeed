import React from 'react';
import { View } from 'react-native';
import styles from './HeaderStyle';
import DefaultText from '../DefaultText/DefaultText';
import { Colors, Helpers } from '../../theme';
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
  return (
    <View style={{ ...Helpers.topMargin }}>
      <DefaultText
        text={title}
        bold
        style={{
          ...styles.headerTextStyle,
          color: light && Colors.$white,
          fontSize: small ? 20 : 30,
        }}
      />
      <DefaultText
        text={subTitle}
        style={styles.subHeaderStyle}
        noNumberOfLines={noNumberOfLines}
      />
    </View>
  );
};

export default Header;
