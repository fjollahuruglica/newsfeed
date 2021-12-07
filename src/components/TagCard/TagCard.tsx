import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { Images } from '../../theme';
import DefaultText from '../DefaultText/DefaultText';
import styles from './TagCardStyle';
interface Props {
  text: string;
  icon?: boolean;
  light?: boolean;
}
const TagCard: React.FC<Props> = ({ text, icon, light }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.cardContainer,
        backgroundColor: light ? colors.border : colors.primary,
      }}>
      {icon && (
        <Image
          style={{ ...styles.timeIcon, tintColor: colors.text }}
          resizeMode="cover"
          source={Images.time}
        />
      )}
      <DefaultText
        text={text}
        style={{
          ...styles.cardText,
          color: light ? colors.primary : colors.border,
        }}
      />
    </View>
  );
};

export default TagCard;
