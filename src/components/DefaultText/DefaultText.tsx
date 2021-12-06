import React from 'react';
import { Text, View } from 'react-native';
import { Fonts } from '../../theme';
interface Props {
  text: string;
  bold?: boolean;
  style?: any;
}
const Header: React.FC<Props> = ({ text, bold, style }) => {
  return (
    <View>
      {bold ? (
        <Text numberOfLines={2} style={{ ...Fonts.fontFamilyBold, ...style }}>
          {text}
        </Text>
      ) : (
        <Text numberOfLines={2} style={{ ...Fonts.fontFamilyLight, ...style }}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default Header;
