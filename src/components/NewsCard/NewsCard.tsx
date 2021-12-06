import React from 'react';
import { View, Image } from 'react-native';
import { Images } from '../../theme';
import DefaultText from '../DefaultText/DefaultText';
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
        <DefaultText style={styles.headingInfo} text={title} bold />
        <View style={styles.timeInfo}>
          <Image
            style={styles.timeIcon}
            resizeMode="cover"
            source={Images.time}
          />
          <DefaultText style={styles.timeText} text={time} />
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
