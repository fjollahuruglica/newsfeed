import React from 'react';
import { Text, View } from 'react-native';
import { Fonts } from '../../theme';
interface Props {
  text: string;
  bold?: boolean;
  style?: any;
  noNumberOfLines?: any;
}
const DefaultText: React.FC<Props> = ({
  text,
  bold,
  style,
  noNumberOfLines,
}) => {
  return (
    <View>
      {bold ? (
        <Text
          numberOfLines={noNumberOfLines ? undefined : 2}
          style={{ ...Fonts.fontFamilyBold, ...style }}>
          {text}
        </Text>
      ) : (
        <Text
          numberOfLines={noNumberOfLines ? undefined : 2}
          style={{ ...Fonts.fontFamilyLight, ...style }}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default DefaultText;
