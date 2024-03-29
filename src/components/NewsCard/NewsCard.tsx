import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { View, Image } from 'react-native';
import { Images } from '../../theme';
import DefaultText from '../DefaultText/DefaultText';
import styles from './NewsCardStyle';
interface Props {
  title: string;
  image: string;
  date: string;
}
const NewsCard: React.FC<Props> = ({ title, image, date }) => {
  const { colors } = useTheme();
  const time = moment(date).startOf('day').fromNow();
  const number = Math.floor(Math.random() * 1000) + 200;
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        resizeMode="cover"
        source={{
          uri: image ? image : `https://picsum.photos/${number}/${number}`,
        }}
      />
      <View style={styles.cardInfo}>
        <DefaultText
          style={{ ...styles.headingInfo, color: colors.primary }}
          text={title}
          bold
        />
        <View style={styles.timeInfo}>
          <Image
            style={{ ...styles.timeIcon, tintColor: colors.text }}
            resizeMode="cover"
            source={Images.time}
          />
          <DefaultText
            style={{ ...styles.timeText, color: colors.text }}
            text={time}
          />
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
