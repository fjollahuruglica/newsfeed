import React from 'react';
import { Image, View } from 'react-native';
import { Colors, Images } from '../../theme';
import DefaultText from '../DefaultText/DefaultText';
import styles from './TagCardStyle';
interface Props {
  text: string;
  icon?: boolean;
  light?: boolean;
}
const TagCard: React.FC<Props> = ({ text, icon, light }) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        backgroundColor: light ? Colors.$inputColor : Colors.$primary,
      }}>
      {icon && (
        <Image
          style={styles.timeIcon}
          resizeMode="cover"
          source={Images.time}
        />
      )}
      <DefaultText
        text={text}
        style={{
          ...styles.cardText,
          color: light ? Colors.$primary : Colors.$white,
        }}
      />
    </View>
  );
};

export default TagCard;
