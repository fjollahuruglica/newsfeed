import React from 'react';
import { View, Image, Text } from 'react-native';
import { Images } from '../../theme';
import styles from './NewsCardStyle';
interface Props {
  title: string;
  image: string;
  time: string;
}
const NewsCard: React.FC<Props> = ({ title, image, time }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        resizeMode="cover"
        source={{
          uri: image,
        }}
      />
      <View style={styles.cardInfo}>
        <Text numberOfLines={2} style={styles.headingInfo}>
          {title}
        </Text>
        <View style={styles.timeInfo}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={Images.time}
          />
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
